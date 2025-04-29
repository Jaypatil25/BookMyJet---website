"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active link based on scroll position
      const sections = document.querySelectorAll("section[id], div[id]")
      let currentActive = "home"

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentActive = section.getAttribute("id")
        }
      })

      setActiveLink(currentActive)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavLinkClick = (linkName, e) => {
    e.preventDefault()
    setActiveLink(linkName)
    setIsMenuOpen(false)

    const element = document.getElementById(linkName)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <a href="#home" onClick={(e) => handleNavLinkClick("home", e)}>
            <img src="/logo.png" alt="BookMyJet Logo" className="logo" />
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon-bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-icon-bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a
              href="#home"
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              onClick={(e) => handleNavLinkClick("home", e)}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#search"
              className={`nav-link ${activeLink === "search" ? "active" : ""}`}
              onClick={(e) => handleNavLinkClick("search", e)}
            >
              Flights
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#destinations"
              className={`nav-link ${activeLink === "destinations" ? "active" : ""}`}
              onClick={(e) => handleNavLinkClick("destinations", e)}
            >
              Destinations
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#why-choose-us"
              className={`nav-link ${activeLink === "why-choose-us" ? "active" : ""}`}
              onClick={(e) => handleNavLinkClick("why-choose-us", e)}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              onClick={(e) => handleNavLinkClick("contact", e)}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-buttons">
          <button className="btn btn-secondary">Sign In</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
