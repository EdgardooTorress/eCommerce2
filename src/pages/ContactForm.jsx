import React, { useState } from "react"
import "../contact-form.css" // uses global classes, not CSS modules

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  })

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  // Regex patterns for validation
  const patterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\d\s\-+()]{10,20}$/,
  }

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) return "This field is required"
        if (!patterns.name.test(value)) return "Please enter a valid name (letters only, 2-50 characters)"
        return ""
      case "email":
        if (!value.trim()) return "Email is required"
        if (!patterns.email.test(value)) return "Please enter a valid email address"
        return ""
      case "phone":
        if (!value.trim()) return "Phone number is required"
        if (!patterns.phone.test(value)) return "Please enter a valid phone number"
        return ""
      case "comment":
        if (!value.trim()) return "Comment is required"
        if (value.trim().length < 10) return "Comment must be at least 10 characters"
        return ""
      default:
        return ""
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      comment: validateField("comment", formData.comment),
    }

    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "")
    if (!hasErrors) {
      // submit: replace with your API call later
      console.log("Form submitted:", formData)
      setIsSubmitted(true)

      setTimeout(() => {
        setFormData({ firstName: "", lastName: "", email: "", phone: "", comment: "" })
        setIsSubmitted(false)
      }, 3000)
    }
  }

  if (isSubmitted) {
    return (
      <div className="successMessage">
        <h3>Thank You!</h3>
        <p>Your message has been sent successfully. We'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <div className="contact-form">

    <h1 className="contact-title">Contact Us</h1>

    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <div className="field">
          <label htmlFor="firstName" className="label">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`input ${errors.firstName ? "inputError" : ""}`}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="field">
          <label htmlFor="lastName" className="label">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`input ${errors.lastName ? "inputError" : ""}`}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="email" className="label">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input ${errors.email ? "inputError" : ""}`}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="phone" className="label">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`input ${errors.phone ? "inputError" : ""}`}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      <div className="field">
        <label htmlFor="comment" className="label">Comment *</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows={5}
          className={`textarea ${errors.comment ? "inputError" : ""}`}
        />
        {errors.comment && <p className="error">{errors.comment}</p>}
      </div>

      <button type="submit" className="button">Send Message</button>
    </form>
    </div>
  )
}

