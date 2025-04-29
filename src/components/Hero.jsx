"use client"

import "./Hero.css"

function Hero() {
  const scrollToSearch = (e) => {
    e.preventDefault()
    const searchElement = document.getElementById("search")
    if (searchElement) {
      window.scrollTo({
        top: searchElement.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }
  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <h1>Fly to Your Dream Destinations</h1>
        <p>Find and book the best flight deals with BookMyJet</p>
        <button className="hero-cta" onClick={scrollToSearch}>
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Hero
