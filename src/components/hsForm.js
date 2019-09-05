import React, { useState } from 'react'
import AddField from './AddField'
import FormField from './helpers/FormField'
import score from './hsScoreTable'

const HSForm = () => {

  const [grade, setGrade] = useState('')

  const handleHsForm = (event) => {
    event.preventDefault()
    console.log(grade)
  }

  return (
    <div>
      <form onSubmit={handleHsForm}>
        <AddField grade={grade} setGrade={setGrade}/>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default HSForm
