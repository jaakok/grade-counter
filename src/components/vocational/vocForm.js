import React, { useState } from 'react'
import { Form } from '@rocketseat/unform'
import FormFields from './Formfields'
import count from './formHandler'
import Results from '../Results'

const VocForm = () => {

  const [totalS, setTotalS] = useState('')
  const [gradeSys, setGradeSys] = useState(false)

  const handleSubmit = data => {
    console.log(data)
    count({data, totalS, setTotalS, gradeSys})
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormFields gradeSys={gradeSys} setGradeSys={setGradeSys}/>
        <button type='submit'>Submit</button>
      </Form>
      <Results totalS={totalS} />
    </div>
  )
}

export default VocForm
