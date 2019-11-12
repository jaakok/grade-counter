import React from 'react'

const Results = ({totalS, title}) => {
  console.log(title)
  return (
    <div>
      <h3>Kokonaispisteet</h3>
      <p>Pisteet: {totalS}</p>
      {
        title.map(t => <p>{t}</p>)
      }
    </div>
  )
}

export default Results
