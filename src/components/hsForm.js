import React, { useState } from 'react'
import { Form, Select, Scope} from '@rocketseat/unform'
import {score, grades} from './hsScoreTable'
import count from './hsFormLogic'

const FormField = () => {
  return (
    <>
    <Scope path={Math.random()}>
      <label>
      Aine
      <Select name='name' options={score} />
      </label>
      <label>
      Arvosana
      <Select name='grade' options={grades} />
      </label>
    </Scope>
    <br/>
    </>
  )
}

const HSForm = () => {

  const [children, setChildren] = useState([])

  const handleSubmit = data => {
    console.log('submitted!')
    count(data)
  }

  const handleClick = event => {
    event.preventDefault()
    setChildren([...children, <FormField/>])
  }

  const remove = event => {
    event.preventDefault()
    setChildren(children.slice(0, -1))
  }

  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <Scope path='fin'>
            <label>Äidinkieli</label>
            <Select name='grade' options={grades} />
          </Scope>
          <br/>
        {children.map(child => child)}
        <button onClick={handleClick}>Add field</button>
        <button onClick={remove}>Remove Latest</button>
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

export default HSForm
