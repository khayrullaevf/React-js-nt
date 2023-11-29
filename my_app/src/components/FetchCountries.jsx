import React, { useState } from "react";
import { useEffect } from "react";
import CountriesCard from "./CountriesCard";

const FetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm,setSearchTerm]=useState('')

  const fetchData = async () => {
    try {
      let url = "https://restcountries.com/v3.1/all";
      if (searchTerm.trim()) {
        url = `https://restcountries.com/v3.1/name/${searchTerm}`;
    }
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCountries(data);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleSearch=(event)=>{
    setSearchTerm(event.target.value)
 }



  useEffect(() => {
    fetchData();
  }, [searchTerm]);
  return (
    <div className="container">
      <h1 className="text-center">Countries</h1>

      <input value={searchTerm} type="text" className="form-control mb-3" placeholder="search"  onChange={handleSearch}/>

      <div className="row ">
     {countries.map((country, index) => (
            <CountriesCard key={index} countryData={country} />
          ))}
    
      </div>
    </div>
  );
};

export default FetchCountries;
