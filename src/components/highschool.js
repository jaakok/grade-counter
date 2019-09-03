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
      <h2>Hello I'm high school studies</h2>
      <button onClick={handleClick}>
        Click me to reveal stuff
      </button>
      {showComp ?
        <HSForm />
        : null
      }
    </div>
  )
}

export default HighSchool
