import React from "react"
import VideoHero from "../components/VideoHero.jsx"
import ProductSlider from "../components/ProductSlider.jsx"
import Reviews from "../components/Reviews.jsx"
import "../App.css"
export default function HomePage() {
  return (
    <>
      <VideoHero />
      <ProductSlider />
      <div className="review-title"><h2>What costumers say:</h2></div>
      <Reviews />
    </>
  )
}
