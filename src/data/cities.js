export const cities = [
  // India
  { name: "Mumbai", country: "India", code: "BOM" },
  { name: "Delhi", country: "India", code: "DEL" },
  { name: "Bangalore", country: "India", code: "BLR" },
  { name: "Hyderabad", country: "India", code: "HYD" },
  { name: "Chennai", country: "India", code: "MAA" },
  { name: "Kolkata", country: "India", code: "CCU" },
  { name: "Pune", country: "India", code: "PNQ" },
  { name: "Ahmedabad", country: "India", code: "AMD" },
  { name: "Jaipur", country: "India", code: "JAI" },
  { name: "Lucknow", country: "India", code: "LKO" },
  { name: "Kochi", country: "India", code: "COK" },
  { name: "Goa", country: "India", code: "GOI" },
  { name: "Varanasi", country: "India", code: "VNS" },
  { name: "Chandigarh", country: "India", code: "IXC" },
  { name: "Guwahati", country: "India", code: "GAU" },
  { name: "Indore", country: "India", code: "IDR" },
  { name: "Nagpur", country: "India", code: "NAG" },
  { name: "Coimbatore", country: "India", code: "CJB" },
  { name: "Bhubaneswar", country: "India", code: "BBI" },
  { name: "Visakhapatnam", country: "India", code: "VTZ" },
  
  // USA
  { name: "New York", country: "USA", code: "JFK" },
  { name: "Los Angeles", country: "USA", code: "LAX" },
  { name: "Chicago", country: "USA", code: "ORD" },
  { name: "San Francisco", country: "USA", code: "SFO" },
  { name: "Miami", country: "USA", code: "MIA" },
  { name: "Las Vegas", country: "USA", code: "LAS" },
  { name: "Seattle", country: "USA", code: "SEA" },
  { name: "Boston", country: "USA", code: "BOS" },
  
  // UK
  { name: "London", country: "UK", code: "LHR" },
  { name: "Manchester", country: "UK", code: "MAN" },
  
  // Europe
  { name: "Paris", country: "France", code: "CDG" },
  { name: "Rome", country: "Italy", code: "FCO" },
  { name: "Amsterdam", country: "Netherlands", code: "AMS" },
  { name: "Frankfurt", country: "Germany", code: "FRA" },
  { name: "Madrid", country: "Spain", code: "MAD" },
  { name: "Barcelona", country: "Spain", code: "BCN" },
  { name: "Zurich", country: "Switzerland", code: "ZRH" },
  { name: "Vienna", country: "Austria", code: "VIE" },
  
  // Middle East
  { name: "Dubai", country: "UAE", code: "DXB" },
  { name: "Abu Dhabi", country: "UAE", code: "AUH" },
  { name: "Doha", country: "Qatar", code: "DOH" },
  { name: "Riyadh", country: "Saudi Arabia", code: "RUH" },
  
  // Asia Pacific
  { name: "Singapore", country: "Singapore", code: "SIN" },
  { name: "Tokyo", country: "Japan", code: "NRT" },
  { name: "Hong Kong", country: "Hong Kong", code: "HKG" },
  { name: "Bangkok", country: "Thailand", code: "BKK" },
  { name: "Kuala Lumpur", country: "Malaysia", code: "KUL" },
  { name: "Seoul", country: "South Korea", code: "ICN" },
  { name: "Beijing", country: "China", code: "PEK" },
  { name: "Shanghai", country: "China", code: "PVG" },
  { name: "Sydney", country: "Australia", code: "SYD" },
  { name: "Melbourne", country: "Australia", code: "MEL" },
  { name: "Bali", country: "Indonesia", code: "DPS" },
  { name: "Manila", country: "Philippines", code: "MNL" },
  
  // Africa
  { name: "Cairo", country: "Egypt", code: "CAI" },
  { name: "Johannesburg", country: "South Africa", code: "JNB" },
  { name: "Nairobi", country: "Kenya", code: "NBO" },
  
  // Canada
  { name: "Toronto", country: "Canada", code: "YYZ" },
  { name: "Vancouver", country: "Canada", code: "YVR" },
];

export const getCities = () => {
  return cities.sort((a, b) => a.name.localeCompare(b.name));
};

export const getCitiesByCountry = (country) => {
  return cities.filter(city => city.country === country);
};

export const searchCities = (query) => {
  const lowerQuery = query.toLowerCase();
  return cities.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.country.toLowerCase().includes(lowerQuery) ||
    city.code.toLowerCase().includes(lowerQuery)
  );
};
