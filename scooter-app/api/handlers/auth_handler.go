package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"scooter-app/models"
)

func LoginOrRegister(c *gin.Context) {
	uid := c.MustGet("uid").(string)
	email := c.MustGet("email").(string)

	// contoh dummy, nanti ganti DB
	user := models.User{
		UID:    uid,
		Email:  email,
		Status: "Inactive",
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "login success",
		"user":    user,
	})
}
