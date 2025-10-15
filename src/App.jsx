import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Banner from "./components/Banner.jsx"
import Navbar from "./components/Navbar.jsx"
import SiteFooter from "./components/SiteFooter.jsx"
import ContactForm from "./components/ContactForm.jsx"
import HomePage from "./pages/HomePage.jsx"           // <— now imported
import ProductsPage from "./pages/ProductsPage.jsx"   // <— now imported

function ContactPage() {
  return (
    <section style={{ maxWidth: "900px", margin: "2rem auto", padding: "0 1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "4rem" }}>Contact Us</h2>
      <ContactForm />
    </section>
  )
}

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contacus/contactus.html" element={<Navigate to="/contact" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}
