import React, { useState } from 'react'
import { Form, Select, Scope } from '@rocketseat/unform'
import Results, { count } from './Results'
import {score, grades} from './hsScoreTable'

const FormField = ({props}) => {
  console.log(props)
  return (
    <>
    <Scope path={props.length}>
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

  const [totalS, setTotalS] = useState('')

  const [children, setChildren] = useState([])

  const handleSubmit = data => {
    console.log('submitted!')
    count({data, totalS, setTotalS})
  }

  const add = event => {
    event.preventDefault()
    setChildren([...children, <FormField props={children}/>])
  }

  const remove = event => {
    event.preventDefault()
    setChildren(children.slice(0, -1))
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Scope path='fin'>
          <label>Äidinkieli</label>
          <Select name='grade' options={grades} />
        </Scope>
        <br/>
        {children.map(child => child)}
        <button onClick={add}>Add field</button>
        <button onClick={remove}>Remove Latest</button>
        <button type='submit'>Submit</button>
      </Form>
      <Results total={[totalS]}/>
    </div>
  )
}

export default HSForm
