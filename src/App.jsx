import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Banner from "./components/Banner.jsx"
import Navbar from "./components/Navbar.jsx"
import SiteFooter from "./components/SiteFooter.jsx"
import ContactForm from "./pages/ContactForm.jsx"
import HomePage from "./pages/HomePage.jsx"         
import ProductsPage from "./pages/ProductsPage.jsx"   


function CheckoutPage() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>Checkout</h2>
      <p>Cart / checkout flow.</p>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Banner />
      <header><Navbar /></header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}
