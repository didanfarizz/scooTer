package middlewares

import (
	"context"
	"net/http"
	"strings"

	"scooter-app/config"

	"github.com/gin-gonic/gin"
)

func FirebaseAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")

		if authHeader == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"message": "missing authorization header",
			})
			return
		}

		tokenString := strings.Replace(authHeader, "Bearer ", "", 1)

		client, err := config.FirebaseApp.Auth(context.Background())
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "firebase auth error"})
			return
		}

		token, err := client.VerifyIDToken(context.Background(), tokenString)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "invalid token"})
			return
		}

		c.Set("uid", token.UID)
		// Ensure email is stored as a string
		if em, ok := token.Claims["email"].(string); ok {
			c.Set("email", em)
		} else {
			c.Set("email", "")
		}

		c.Next()
	}
}
