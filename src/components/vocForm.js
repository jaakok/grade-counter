import React, { useState } from 'react'
import { Form, Select, Scope } from '@rocketseat/unform'

const VocForm = () => {

  const [totalS, setTotalS] = useState('')
  const [gradeSys, setGradeSys] = useState(false)

  const handleSubmit = data => {
    console.log('submitted!')
  }

  const selectGrading = event => {
    event.preventDefault()
    gradeSys
    ? setGradeSys(false)
    : setGradeSys(true)
  }

  const grades3 = [
    {id: '3', title: '3'}
  ]

  const grades5 = [
    {id: '5', title: '5'}
  ]

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <button onClick={selectGrading}>Valitse pisteytysjärjestelmä {activeGrading}</button>
        <Scope path='fin'>
          <label>Äidinkieli</label>
          <Select name='grade' options={
            
          } />
        </Scope>
        <br/>
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

export default VocForm
