import React, { useState } from 'react'
import FormField from './helpers/FormField'
import score from './hsScoreTable'

const AddField = ({grade, setGrade}) => {

  const [view, setView] = useState([])

  const addNewField = (event) => {
    event.preventDefault()
    console.log('hi')
    setView(view.concat(1))
    console.log(view)
  }

  return (
    <div>
      { view.length > 0 ? <FormField grade={grade} setGrade={setGrade}/> : null }
      <button onClick={addNewField}>Add new</button>
    </div>
  )
}

export default AddField
