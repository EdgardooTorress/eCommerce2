import React from "react"
import { Link } from "react-router-dom"
import "../style/notfound.css"

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  )
}
