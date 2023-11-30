import React from 'react'

const CountriesCard = (props) => {
   const { name, flags } = props.countryData;

   console.log(name);
   console.log(flags);
  return (
    <div className='col-lg-4 col-6 container ml-1'>
      <img src={flags.png} alt={name.common} />
        <h2>{name.common}</h2>

    </div>
  )
}

export default CountriesCard