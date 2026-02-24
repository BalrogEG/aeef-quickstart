package health

import (
	"encoding/json"
	"net/http"
	"time"
)

// Response represents the health check response body.
type Response struct {
	Status    string `json:"status"`
	Timestamp string `json:"timestamp"`
}

// Handler returns the current health status of the service.
func Handler(w http.ResponseWriter, r *http.Request) {
	resp := Response{
		Status:    "healthy",
		Timestamp: time.Now().UTC().Format(time.RFC3339),
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}
