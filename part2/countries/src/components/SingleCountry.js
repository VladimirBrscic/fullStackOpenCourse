import { useState, useEffect } from "react";

const SingleCountry = ({ country, weather }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    weather(country.latlng).then((response) => {
      setWeatherData(response.data);
    });
  }, []);

  const languagesObj = country.languages;

  if (weatherData) {
    const icon = weatherData.weather[0].icon;
    const weatherImage = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital[0]}</p>
        <p>area {country.area}</p>
        <b>languages:</b>
        <ul>
          {Object.values(languagesObj).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
        <h2>Weather in {country.name.common}</h2>
        <p>temperature {weatherData.main.temp} Celsius</p>
        <img src={weatherImage} />
        <p>wind {weatherData.wind.speed} m/s</p>
      </div>
    );
  }
};

export default SingleCountry;
