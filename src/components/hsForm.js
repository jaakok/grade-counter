import React, { useState } from 'react'
import { Form, Select, Scope} from '@rocketseat/unform'
import score from './hsScoreTable'

const FormField = () => {
  return (
    <>
    <Scope path={Math.random()}>
      <Select name='name' options={score} />
      <Select name='grade' options={[
        { id: 'L', title: 'L'},
        { id: 'M', title: 'M'},
        { id: 'E', title: 'E'},
        { id: 'C', title: 'C'},
        { id: 'B', title: 'B'},
        { id: 'A', title: 'A'}
      ]} />
    </Scope>
    <br/>
    </>
  )
}

const HSForm = () => {

  const [children, setChildren] = useState([])

  const handleSubmit = data => {
    console.log(data)
  }

  const handleClick = event => {
    event.preventDefault()
    setChildren([...children, <FormField/>])
    console.log(children)
  }

  const remove = event => {
    event.preventDefault()
    setChildren(children.slice(0, -1))
  }

  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <Scope path={Math.random()}>
            <Select name='name' options={score} />
            <Select name='grade' options={[
              { id: 'L', title: 'L'},
              { id: 'M', title: 'M'},
              { id: 'E', title: 'E'},
              { id: 'C', title: 'C'},
              { id: 'B', title: 'B'},
              { id: 'A', title: 'A'}
            ]} />
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
