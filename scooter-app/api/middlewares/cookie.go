package middlewares

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func InitialCookie() gin.HandlerFunc {
	return func(c *gin.Context) {

		// cek apakah cookie sudah ada
		_, err := c.Cookie("visitor_id")

		if err != nil {
			// kalau belum ada, buat cookie baru
			c.SetCookie(
				"visitor_id",
				"anonymous", // bisa UUID
				3600*24,     // 1 hari (detik)
				"/",
				"",
				false, // secure (true kalau HTTPS)
				true,  // httpOnly
			)
		}

		fmt.Println("visitor_id:", c.GetHeader("visitor_id"))

		c.Next()
	}
}
