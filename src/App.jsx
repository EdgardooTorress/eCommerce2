import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Banner from "./components/Banner.jsx"
import Navbar from "./components/Navbar.jsx"
import SiteFooter from "./components/SiteFooter.jsx"
import ContactForm from "./pages/ContactForm.jsx"
import HomePage from "./pages/HomePage.jsx"         
import ProductsPage from "./pages/ProductsPage.jsx" 
import NotFound from "./pages/NotFound.jsx"
import CheckoutPage from "./pages/CheckoutPage.jsx"

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}
