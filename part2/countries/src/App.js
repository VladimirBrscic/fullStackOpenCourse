import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import countriesService from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [single, setSingle] = useState([]);

  useEffect(() => {
    countriesService.getCountry().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const inputChange = (event) => {
    setCountrySearch(event.target.value);
    setSingle([]);
  };

  const showSingleCountry = (country) => {
    const singleArr = [country]
    setSingle(singleArr);
  };

  const weather = (coordinates) => {
    const weatherData =
    countriesService.getWeather(coordinates)
    return weatherData
  };

  let filteredCountries;

  if(countrySearch && single.length === 0){
   filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(countrySearch.toLowerCase()))
  }else if(single){
    filteredCountries = single;
  }else{
    filteredCountries = [];
  }
  
  return (
    <div>
      <div>
        find countries <input onChange={inputChange} value={countrySearch} />
      </div>
      <Countries
        countries={filteredCountries}
        showSingleCountry={showSingleCountry}
        weather={weather}
      />
    </div>
  )
}
export default App;
