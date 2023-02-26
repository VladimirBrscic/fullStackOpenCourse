import axios from 'axios'


const getCountry = () => {
    return axios.get(`https://restcountries.com/v3.1/all`)
  }
const getWeather = (coordinates) => {
  const [ lat, lon] = coordinates;
  const api_key = process.env.REACT_APP_API_KEY;
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
}
  
export default { 
    getCountry, getWeather
  }
  