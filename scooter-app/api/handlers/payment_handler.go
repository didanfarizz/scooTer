package handlers

import (
	"math/rand"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

// ProcessTransaction handles POST /api/payment/process-transaction
// For now returns a mock token that can be used for testing client flow.
func ProcessTransaction(c *gin.Context) {
	var body struct {
		OrderId         string `json:"orderId"`
		Amount          int    `json:"amount"`
		CustomerDetails any    `json:"customerDetails"`
	}

	if err := c.BindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
		return
	}

	// generate a mock token (replace later with Midtrans integration)
	rand.Seed(time.Now().UnixNano())
	token := "mock-token-" + time.Now().Format("20060102150405") + "-" + string(rune(rand.Intn(9000)+1000))

	c.JSON(http.StatusOK, gin.H{"token": token})
}
