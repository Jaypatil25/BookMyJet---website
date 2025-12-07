"use client"

import { useState } from "react"
import "./SearchForm.css"

function SearchForm({ cities, loading }) {
  const [tripType, setTripType] = useState("roundTrip")
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [departDate, setDepartDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [passengers, setPassengers] = useState(1)
  const [cabinClass, setCabinClass] = useState("economy")

  const [fromSuggestions, setFromSuggestions] = useState([])
  const [toSuggestions, setToSuggestions] = useState([])
  const [showFromSuggestions, setShowFromSuggestions] = useState(false)
  const [showToSuggestions, setShowToSuggestions] = useState(false)


  const today = new Date().toISOString().split("T")[0]

  const handleFromCityChange = (e) => {
    const value = e.target.value
    setFromCity(value)

    if (value.length > 1 && cities.length > 0) {
      const filtered = cities.filter((city) => 
        city.name.toLowerCase().includes(value.toLowerCase()) ||
        city.code.toLowerCase().includes(value.toLowerCase()) ||
        city.country.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5)
      setFromSuggestions(filtered)
      setShowFromSuggestions(true)
    } else {
      setShowFromSuggestions(false)
    }
  }

  const handleToCityChange = (e) => {
    const value = e.target.value
    setToCity(value)

    if (value.length > 1 && cities.length > 0) {
      const filtered = cities.filter((city) => 
        city.name.toLowerCase().includes(value.toLowerCase()) ||
        city.code.toLowerCase().includes(value.toLowerCase()) ||
        city.country.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5)
      setToSuggestions(filtered)
      setShowToSuggestions(true)
    } else {
      setShowToSuggestions(false)
    }
  }

  const selectFromCity = (city) => {
    setFromCity(`${city.name} (${city.code})`)
    setShowFromSuggestions(false)
  }

  const selectToCity = (city) => {
    setToCity(`${city.name} (${city.code})`)
    setShowToSuggestions(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      tripType,
      fromCity,
      toCity,
      departDate,
      returnDate,
      passengers,
      cabinClass,
    })

    alert(`✈️ Your ticket has been booked successfully!\n\nFrom: ${fromCity}\nTo: ${toCity}\nDeparture: ${departDate}\nPassengers: ${passengers}\nClass: ${cabinClass.charAt(0).toUpperCase() + cabinClass.slice(1)}\n\nThank you for choosing BookMyJet!`)
  }

  return (
    <div className="search-form-container" id="search">
      <div className="search-form-card">
        <div className="trip-type-selector">
          <button className={tripType === "roundTrip" ? "active" : ""} onClick={() => setTripType("roundTrip")}>
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
              <path d="M17 2l4 4-4 4"></path>
              <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
              <path d="M7 22l-4-4 4-4"></path>
              <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
            </svg>
            Round Trip
          </button>
          <button className={tripType === "oneWay" ? "active" : ""} onClick={() => setTripType("oneWay")}>
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
              <path d="M17 2l4 4-4 4"></path>
              <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
            </svg>
            One Way
          </button>
          <button className={tripType === "multiCity" ? "active" : ""} onClick={() => setTripType("multiCity")}>
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
              <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
              <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
              <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
              <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
            </svg>
            Multi-City
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group from-city">
              <label>From</label>
              <div className="input-with-suggestions">
                <div className="input-with-icon">
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
                    className="input-icon"
                  >
                    <path d="M12 19l9 2-9-18-9 18 9-2z"></path>
                  </svg>
                  <input
                    type="text"
                    value={fromCity}
                    onChange={handleFromCityChange}
                    placeholder={loading ? "Loading cities..." : "Enter city or airport"}
                    required
                    disabled={loading}
                  />
                </div>
                {showFromSuggestions && fromSuggestions.length > 0 && (
                  <ul className="suggestions">
                    {fromSuggestions.map((city, index) => (
                      <li key={index} onClick={() => selectFromCity(city)}>
                        {city.name} ({city.code}) - {city.country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="form-group to-city">
              <label>To</label>
              <div className="input-with-suggestions">
                <div className="input-with-icon">
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
                    className="input-icon"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                  <input
                    type="text"
                    value={toCity}
                    onChange={handleToCityChange}
                    placeholder={loading ? "Loading cities..." : "Enter city or airport"}
                    required
                    disabled={loading}
                  />
                </div>
                {showToSuggestions && toSuggestions.length > 0 && (
                  <ul className="suggestions">
                    {toSuggestions.map((city, index) => (
                      <li key={index} onClick={() => selectToCity(city)}>
                        {city.name} ({city.code}) - {city.country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Depart</label>
              <div className="input-with-icon">
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
                  className="input-icon"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  min={today}
                  required
                />
              </div>
            </div>

            {tripType === "roundTrip" && (
              <div className="form-group">
                <label>Return</label>
                <div className="input-with-icon">
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
                    className="input-icon"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={departDate || today}
                    required={tripType === "roundTrip"}
                    disabled={!departDate}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Passengers</label>
              <div className="input-with-icon">
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
                  className="input-icon"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <select value={passengers} onChange={(e) => setPassengers(Number(e.target.value))}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Passenger" : "Passengers"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Cabin Class</label>
              <div className="input-with-icon">
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
                  className="input-icon"
                >
                  <path d="M3 10h18"></path>
                  <path d="M3 14h18"></path>
                  <path d="M5 18h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"></path>
                </svg>
                <select value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
                  <option value="economy">Economy</option>
                  <option value="premiumEconomy">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="firstClass">First Class</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="search-btn">
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
              className="search-icon"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search Flights
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchForm
