import React from "react"
import { Link } from "react-router-dom"
import "../style/checkout.css"

export default function CheckoutPage() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist yet.</p>
      <p>I know you would like to buy, but we are still working on it</p>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  )
}
