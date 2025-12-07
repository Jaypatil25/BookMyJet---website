"use client"

import { useState, useEffect } from "react"
import "./App.css"
import { getCities } from "./data/cities"

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
    const allCities = getCities()
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
