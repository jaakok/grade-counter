import React, { useState } from 'react'
import score from './hsScoreTable'

const HSForm = () => {

  const [grade, setGrade] = useState('')

  const grades = ['l', 'e', 'm', 'c', 'b', 'a']

  const handleHsForm = (event) => {
    event.preventDefault()
    console.log(grade)
  }

  const handleRadio = (event) => {
    setGrade(event.target.value)
  }

  const addNewField = (event) => {
    event.preventDefault()
    console.log('hi')
  }

  return (
    <div>
      <form onSubmit={handleHsForm}>
        <div>
          <label htmlFor='grade'>{score[0].name}</label>
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
                  name='grade'
                />
                {g.toUpperCase()}
              </label>
            )
          })
        }
        </div>
        <div>
          <button onClick={addNewField}>Add new</button>
        </div>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default HSForm
