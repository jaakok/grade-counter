import React from 'react'

const Results = ({totalS, title}) => {
  return (
    <div>
      <h4>Yhteenveto</h4>
      <p>Pisteet yhteensä: {totalS}</p>
      {
        title.map(t => <p>{t}</p>)
      }
    </div>
  )
}

export default Results
