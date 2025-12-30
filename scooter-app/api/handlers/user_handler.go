package handlers

import (
	"fmt"
	"net/http"
	"sync"
	"time"

	"scooter-app/models"

	"github.com/gin-gonic/gin"
)

// simple in-memory store (email -> user)
var (
	userStore = make(map[string]models.User)
	storeMu   sync.RWMutex
)

// GetUserStatus handles GET /api/user/status/:email
func GetUserStatus(c *gin.Context) {
	email := c.Param("email")
	storeMu.RLock()
	user, ok := userStore[email]
	storeMu.RUnlock()

	if !ok {
		c.JSON(http.StatusOK, gin.H{"status": "Inactive"})
		return
	}

	resp := gin.H{"status": user.Status}
	if user.ActiveUntil != "" {
		resp["activeUntil"] = user.ActiveUntil
	}

	c.JSON(http.StatusOK, resp)
}

// UpdateUserStatus handles POST /api/user/update-status
// Expected body: { email: string, status: string, durationSeconds?: int }
func UpdateUserStatus(c *gin.Context) {
	var body struct {
		Email           string `json:"email"`
		Status          string `json:"status"`
		DurationSeconds int    `json:"durationSeconds"`
	}

	if err := c.BindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
		return
	}

	if body.Email == "" || body.Status == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "email and status required"})
		return
	}

	var activeUntil string
	if body.Status == "Active" {
		// default duration 5 minutes if not provided
		dur := time.Duration(300) * time.Second
		if body.DurationSeconds > 0 {
			dur = time.Duration(body.DurationSeconds) * time.Second
		}
		activeAt := time.Now().Add(dur)
		activeUntil = activeAt.Format(time.RFC3339)
	}

	storeMu.Lock()
	userStore[body.Email] = models.User{
		Email:       body.Email,
		Status:      body.Status,
		ActiveUntil: activeUntil,
	}
	storeMu.Unlock()

	c.JSON(http.StatusOK, gin.H{"message": "status updated"})
}
// GetVisitorCookie reads/creates the visitor cookie and returns its value in JSON
func GetVisitorCookie(c *gin.Context) {
    visitor, err := c.Cookie("visitor_id")
    if err != nil || visitor == "" {
        // generate a simple unique id
        visitor = fmt.Sprintf("v-%d", time.Now().UnixNano())
        // set cookie (not httpOnly so front-end can read it if browser accepts)
        c.SetCookie("visitor_id", visitor, 3600*24, "/", "", false, false)
    }

    c.JSON(http.StatusOK, gin.H{"visitor_id": visitor})
}