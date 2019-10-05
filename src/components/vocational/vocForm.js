import React, { useState } from 'react'
import { Form } from '@rocketseat/unform'
import FormFields from './Formfields'

const VocForm = () => {

  const [totalS, setTotalS] = useState('')

  const handleSubmit = data => {
    console.log(data)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormFields />
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

export default VocForm
