import React, { useState } from 'react'

const HSForm = () => {

  const [grade, setGrade] = useState('')

  const grades = ['l', 'e', 'm', 'c', 'b', 'a']

  const handleHsForm = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }

  const handleRadio = (event) => {
    console.log(event.target.value)
    setGrade(event.target.value)
    console.log(grade)
  }

  return (
    <div>
      <form onSubmit={handleHsForm}>
        {
          grades.map(g => {
          return (
            <label key={g}>
              <input
                key={'key ' + g}
                type='radio'
                value={g}
                checked={grade === g}
                onChange={handleRadio}
              />
              {g.toUpperCase()}
            </label>
          )
        })
      }
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default HSForm
