package middleware

import (
	"encoding/json"
	"net/http"
	"sync"
	"time"
)

type client struct {
	count     int
	resetTime time.Time
}

// RateLimiter returns a chi-compatible middleware that limits requests per IP.
func RateLimiter(maxRequests int, windowSeconds int) func(http.Handler) http.Handler {
	var mu sync.Mutex
	clients := make(map[string]*client)
	window := time.Duration(windowSeconds) * time.Second

	// Cleanup goroutine
	go func() {
		ticker := time.NewTicker(window)
		defer ticker.Stop()
		for range ticker.C {
			mu.Lock()
			now := time.Now()
			for ip, c := range clients {
				if now.After(c.resetTime) {
					delete(clients, ip)
				}
			}
			mu.Unlock()
		}
	}()

	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			ip := r.RemoteAddr
			now := time.Now()

			mu.Lock()
			c, exists := clients[ip]
			if !exists || now.After(c.resetTime) {
				clients[ip] = &client{count: 1, resetTime: now.Add(window)}
				mu.Unlock()
				next.ServeHTTP(w, r)
				return
			}

			if c.count >= maxRequests {
				retryAfter := int(time.Until(c.resetTime).Seconds()) + 1
				mu.Unlock()
				w.Header().Set("Content-Type", "application/json")
				w.WriteHeader(http.StatusTooManyRequests)
				json.NewEncoder(w).Encode(map[string]any{
					"error":      "Too many requests",
					"retryAfter": retryAfter,
				})
				return
			}

			c.count++
			mu.Unlock()
			next.ServeHTTP(w, r)
		})
	}
}
