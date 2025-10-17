"use client"

import { useEffect, useState } from "react"
import "../style/product-slider.css"
import { Link } from "react-router-dom"

const products = [
  { id: 1, name: "Creed Aventus", image: "/creed.webp" },
  { id: 2, name: "Rabanne Elixir", image: "/Rabanne elixir.webp" },
  { id: 3, name: "Valentino Born in Roma", image: "/valentino.webp" },
  { id: 4, name: "Prada Luna Sport", image: "/prada.webp" },
  { id: 5, name: "Stronger With You", image: "/Stronger.webp" },
  { id: 6, name: "1 Million Lucky", image: "/lucky.webp" },
  { id: 7, name: "Versace Eros", image: "/Eros.webp" },
]

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const getClassName = (index) => {
    if (index === currentIndex) return "slide active"
    if (index === (currentIndex - 1 + products.length) % products.length) return "slide prev"
    if (index === (currentIndex + 1) % products.length) return "slide next"
    return "slide hidden"
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="heading">Featured Fragrances</h2>

        <div className="sliderWrapper">
          <button onClick={goToPrevious} className="navButton prevButton" aria-label="Previous product">
            ‹
          </button>

          <div className="slider">
            {products.map((product, index) => (
              <div key={product.id} className={getClassName(index)}>
                <div className="card">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} className="image" />
                  <div className="cardContent">
                    <h3 className="productName">{product.name}</h3>
                    {index === currentIndex && (<Link to="/products" className="shopNowBtn">Shop Now</Link>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={goToNext} className="navButton nextButton" aria-label="Next product">
            ›
          </button>

          <div className="dots">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`dot ${index === currentIndex ? "activeDot" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
