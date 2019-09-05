import React, { useState } from 'react'
import score from '../hsScoreTable'

const FormField = ({grade, setGrade}) => {

  const grades = ['l', 'e', 'm', 'c', 'b', 'a']

  const handleRadio = (event) => {
    console.log(grade)
    setGrade(event.target.value)
  }

  return (
    <div>
    <select>
      {
        score.map(s => {
          return(
          <option key={s.name}>{s.name}</option>
        )
        })
      }
    </select>
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
  )
}

export default FormField
