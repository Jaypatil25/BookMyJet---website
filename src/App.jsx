"use client"

import { useState, useEffect } from "react"
import "./App.css"


import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SearchForm from "./components/SearchForm"
import FeaturedDestinations from "./components/FeaturedDestinations"
import WhyChooseUs from "./components/WhyChooseUs"
import Footer from "./components/Footer"

function App() {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  
    const indianCities = [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
      "Kochi",
      "Goa",
      "Varanasi",
    ]


    const internationalCities = [
      "New York",
      "London",
      "Tokyo",
      "Paris",
      "Dubai",
      "Singapore",
      "Sydney",
      "Hong Kong",
      "Rome",
    ]

   
    const allCities = [...indianCities, ...internationalCities].sort()
    setCities(allCities)
    setLoading(false)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <SearchForm cities={cities} loading={loading} />
        <FeaturedDestinations />
        <WhyChooseUs />
      </div>
      <Footer />
    </>
  )
}

export default App
