import React from 'react'

const Results = ({totalS, title}) => {
  return (
    <div>
      <h4>Yhteenveto</h4>
      {title.length > 0
        ?
          <div>
            <p>Pisteet yhteensä: {totalS}</p>
            <p>Pisteet yksittäisistä aineista:</p>
          {title.map(t => <p>{t}</p>)}
          </div>
        : null
      }
    </div>
  )
}

export default Results
