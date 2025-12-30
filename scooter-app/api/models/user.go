package models

type User struct {
	UID         string `json:"uid"`
	Email       string `json:"email"`
	Status      string `json:"status"`
	ActiveUntil string `json:"activeUntil,omitempty"`
}
