import Country from "./Country";
import SingleCountry from "./SingleCountry";

const Countries = ({ countries, showSingleCountry, weather }) => {


  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }else if(countries.length === 1){
    return(
      <SingleCountry country={countries[0]} weather={weather} />
    )
  }
  else{
    return (
      <ul>
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            showSingleCountry={showSingleCountry}
          />
        ))}
      </ul>
    );
  }
};

export default Countries;