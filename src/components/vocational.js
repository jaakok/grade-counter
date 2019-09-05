import React, { useState } from 'react'
import VocForm from './vocForm'

const Voc = () => {

  const [ showComp, setShowComp ] = useState('')

  const handleClick = (event) => {
    showComp ?
    setShowComp(false)
    : setShowComp(true)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Ammattikoulu
      </button>
      {showComp ?
        <VocForm />
        : null
      }
    </div>
  )
}

export default Voc
