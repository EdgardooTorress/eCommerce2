import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav>
      <ul className="sidebar" style={{ display: open ? "flex" : "none" }}>
        <li onClick={close}><a><img src="/close_sidebar.png" alt="close sidebar icon" /></a></li>
        <li><Link to="/" onClick={close}>Home</Link></li>
        <li><Link to="/contact" onClick={close}>Contact us</Link></li>
        <li><Link to="/products" onClick={close}>Products</Link></li>
        <li><Link to="/checkout" onClick={close}>Checkout</Link></li>
      </ul>

      <ul>
        <li>
          <Link to="/">
            <img className="logo" src="/e.t logo.png" alt="Logo" />
          </Link>
        </li>
        <li className="hideMobile"><Link to="/contact">Contact us</Link></li>
        <li className="hideMobile"><Link to="/products">Products</Link></li>
        <li className="hideMobile"><Link to="/checkout"><img src="/shopping.png" alt="Shopping cart" /></Link></li>
        <li className="menu-btn" onClick={() => setOpen(true)}>
          <a><img src="/sidebar.png" alt="sidebar icon" /></a>
        </li>
      </ul>
    </nav>
  )
}
