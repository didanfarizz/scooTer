package main

import (
	"github.com/gin-gonic/gin"
	"scooter-app/config"
	"scooter-app/routes"
)

func main() {
	config.InitFirebase()

	r := gin.Default()
	routes.SetupRoutes(r)

	r.Run(":1000")
}
