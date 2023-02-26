
const Country = ({country,showSingleCountry}) => {
  
  return (
    <li>
        {country.name.common}{' '}
        <button onClick={()=>showSingleCountry(country)}>show</button>
    </li>
  )
}

export default Country