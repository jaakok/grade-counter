import React, { useState } from 'react'
import HSForm from './hsForm'

const HighSchool = () => {

  const [ showComp, setShowComp ] = useState('')

  const handleClick = (event) => {
    showComp ?
    setShowComp(false)
    : setShowComp(true)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Lukio
      </button>
      {showComp ?
        <HSForm />
        : null
      }
    </div>
  )
}

export default HighSchool
