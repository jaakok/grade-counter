import React, { useState } from 'react'
import { Form, Select, Scope, Input } from '@rocketseat/unform'
import Results from './Results'
import count from './formHandler'
import {score, grades, math, forLang} from './hsScoreTable'

const FormField = ({props}) => {
  console.log(props)
  return (
    <>
    <Scope path={props.length}>
      <label>
      Aine
      <Select name='name' options={score}/>
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
  const [totalS, setTotal] = useState('')
  const [title, setTitle] = useState([])

  const handleSubmit = data => {

    console.log('submitted!')
    !!(data.fin.grade)
    ? count({data, setTotal, title, setTitle})
    : setTotal('Valitse arvosanat')
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
          <label>
          Äidinkieli
          </label>
          <Input readOnly={true} style={{display: 'none'}} name='name' value='fin'/>
          <label>
          Arvosana
          <Select name='grade' options={grades} />
          </label>
        </Scope>
        <br/>

        <Scope path='math'>
          <label>
          Matematiikka
          <Select name='name' options={math} />
          </label>
          <label>
          Arvosana
          <Select name='grade' options={grades} />
          </label>
        </Scope>
        <br/>

        <Scope path='foreign'>
          <label>
          Vieras kieli / Toinen kotimainen kieli
          </label>
          <Select name='name' options={forLang} />
          <label>
          Arvosana
          <Select name='grade' options={grades} />
          </label>
        </Scope>
        <br/>

        <p>Lisää ainereaaleja</p>
          {children.map(child => child)}
          <button onClick={add}>Lisää aine</button>
          <button onClick={remove}>Poista viimeisin kenttä</button>
        <br/>
        <button type='submit'>Laske</button>
      </Form>
      <Results totalS={totalS} title={title}/>
    </div>
  )
}

export default HSForm
