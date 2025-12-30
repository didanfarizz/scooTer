package routes

import (
	"scooter-app/handlers"
	"scooter-app/middlewares"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	api := r.Group("/api")

	// Auth via firebase token
	api.POST("/auth/login", middlewares.FirebaseAuth(), handlers.LoginOrRegister)

	// User status endpoints (used by frontend)
	api.GET("/user/status/:email", handlers.GetUserStatus)
	api.POST("/user/update-status", handlers.UpdateUserStatus)

	// Payment (mock) endpoint
	api.POST("/payment/process-transaction", handlers.ProcessTransaction)
}
