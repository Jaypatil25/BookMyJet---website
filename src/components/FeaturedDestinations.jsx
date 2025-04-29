"use client"

import { useState } from "react"
import "./FeaturedDestinations.css"

function FeaturedDestinations() {
  const [showAll, setShowAll] = useState(false)

  const destinations = [
    {
      id: 1,
      city: "New York",
      country: "United States",
      price: 29000,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 2,
      city: "Paris",
      country: "France",
      price: 79000,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      city: "Tokyo",
      country: "Japan",
      price: 89000,
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 4,
      city: "Dubai",
      country: "UAE",
      price: 29000,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 5,
      city: "Sydney",
      country: "Australia",
      price: 129000,
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3lkbmV5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    ,
    {
      id: 6,
      city: "London",
      country: "United Kingdom",
      price: 139000,
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
  ]

  const displayedDestinations = showAll ? destinations : destinations.slice(0, 3)

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <section className="featured-destinations" id="destinations">
      <h2>Featured Destinations</h2>
      <p>Discover our most popular destinations with the best deals</p>

      <div className="destinations-grid">
        {displayedDestinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <div className="destination-image">
              <img src={destination.image || "/placeholder.svg"} alt={`${destination.city}, ${destination.country}`} />
            </div>
            <div className="destination-info">
              <h3>{destination.city}</h3>
  n            <p>{destination.country}</p>
              <div className="destination-price">
                <span>From</span>
                <strong>₹{destination.price}</strong>
              </div>
              <button className="btn-explore">
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-view-all" onClick={toggleShowAll}>
        {showAll ? "Show Less" : "View All Destinations"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {showAll ? <polyline points="18 15 12 9 6 15"></polyline> : <polyline points="6 9 12 15 18 9"></polyline>}
        </svg>
      </button>
    </section>
  )
}

export default FeaturedDestinations
