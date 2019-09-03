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
      <h2>Hello I'm vocational studies</h2>
      <button onClick={handleClick}>
        Click me to reveal stuff
      </button>
      {showComp ?
        <VocForm />
        : null
      }
    </div>
  )
}

export default Voc
