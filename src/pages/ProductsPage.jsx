"use client"

import { useState, useEffect } from "react"
import "../style/products.css"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [priceFilter, setPriceFilter] = useState("all")
  const [ozFilter, setOzFilter] = useState("all")

  // Fetch products from API when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://ecommerce2-p8zv.onrender.com/api/products")
        const data = await response.json()
        setProducts(data)
        setFilteredProducts(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Apply filters whenever search term or filters change
  useEffect(() => {
    let filtered = [...products]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Price filter
    if (priceFilter !== "all") {
      if (priceFilter === "under150") {
        filtered = filtered.filter((product) => product.price < 150)
      } else if (priceFilter === "150-300") {
        filtered = filtered.filter((product) => product.price >= 150 && product.price <= 300)
      } else if (priceFilter === "over300") {
        filtered = filtered.filter((product) => product.price > 300)
      }
    }

    // Oz filter
    if (ozFilter !== "all") {
      if (ozFilter === "under3.5") {
        filtered = filtered.filter((product) => {
          const oz = Number.parseFloat(product.oz)
          return oz < 3.5
        })
      } else if (ozFilter === "3.5-5") {
        filtered = filtered.filter((product) => {
          const oz = Number.parseFloat(product.oz)
          return oz >= 3.5 && oz <= 5
        })
      } else if (ozFilter === "over5") {
        filtered = filtered.filter((product) => {
          const oz = Number.parseFloat(product.oz)
          return oz > 5
        })
      }
    }

    setFilteredProducts(filtered)
  }, [searchTerm, priceFilter, ozFilter, products])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    )
  }

  return (
    <div className="products-container">
        <h1 className="title">Featured Products</h1>

        <div className="filters-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by brand or product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            <div className="filter-group">
              <label>Price:</label>
              <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                <option value="all">All Prices</option>
                <option value="under150">Under $150</option>
                <option value="150-300">$150 - $300</option>
                <option value="over300">Over $300</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Size:</label>
              <select value={ozFilter} onChange={(e) => setOzFilter(e.target.value)}>
                <option value="all">All Sizes</option>
                <option value="under3.5">Under 3.5 oz</option>
                <option value="3.5-5">3.5 - 5 oz</option>
                <option value="over5">Over 5 oz</option>
              </select>
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="box">
            {filteredProducts.map((product) => (
              <div key={product.id} className="fragance">
                <img src={product.img || "/placeholder.svg"} alt={product.name} className="images" />
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <p className="price">${product.price}</p>
                <p className="oz">{product.oz}</p>
                <button className="add-cart-button">Add to Cart</button>
              </div>
            ))}
          </div>
        )}
          
    </div>
  )
}
