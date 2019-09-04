import React, { useState } from 'react'

const HSForm = () => {

  const [hsValues, sethsValues] = useState([])

  const handleHsForm = (event) => {
    event.preventDefault()
  }

  const handleRadioChange = (event) => {
    setState({
      selectedOption: event.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleHsForm}>
        <label>
          <input
            type='radio'
            value={hsValues}
            onChange={handleRadioChange}
          />
        Option 1
        </label>
        <label>
          <input
            type='radio'
            value={hsValues}
            onChange={handleRadioChange}
          />
        Option 2
        </label>
        <label>
          <input
            type='radio'
            value={hsValues}
            onChange={handleRadioChange}
          />
        Option 3
        </label>
      </form>
    </div>
  )
}

export default HSForm
