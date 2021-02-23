package main

import (
	"log" 
	"net/http"
)

func main() {
	http.Handle("/home", http.StripPrefix("/home", http.FileServer(http.Dir("./client/build"))))
	http.Handle("/game", http.StripPrefix("/game", http.FileServer(http.Dir("./client/build"))))
	http.Handle("/", http.FileServer(http.Dir("./client/build")))
	http.ListenAndServe(":8080", nil)
	log.Println("Listening on 8080")
}
