package main

import (
	"time"

	"scooter-app/config"
	"scooter-app/middlewares"
	"scooter-app/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	config.InitFirebase()

	r := gin.Default()

	// CORS for dev server (allow Vite dev origin and credentials)
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r.Use(middlewares.InitialCookie())

	routes.SetupRoutes(r)

	r.Run(":1000")
}
