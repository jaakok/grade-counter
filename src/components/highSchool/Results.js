import React from 'react'

const Results = ({totalS}) => {
  console.log(totalS)
  return (
    <div>
      <h3>Kokonaispisteet</h3>
      <p>Pisteet: {totalS}</p>
    </div>
  )
}

export default Results