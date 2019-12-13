import React, { useState } from 'react'
import { Form, Select, Scope, Input } from '@rocketseat/unform'
import Results from './Results'
import count from './formHandler'
import {score, grades, math, forLang} from './hsScoreTable'

const FormField = ({props}) => {
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
  const [message, setMessage] = useState('')

  const handleSubmit = data => {

    console.log('submitted!')
    !!(data.fin.grade)
    ? count({data, setTotal, title, setTitle})
    : setMessage('Valitse arvosanat')
    setTimeout(() => setMessage(''), 1500)
  }

  const add = event => {
    event.preventDefault()
    //Let user add formfields if less than 2 exist
    children.length < 2 && setChildren([...children, <FormField props={children}/>])
    children.length >= 2 && setMessage('Voit lisätä vain kaksi ainereaalia')
  }

  const remove = event => {
    event.preventDefault()
    setChildren(children.slice(0, -1))
  }

  return (
    <div>
    <p>Valitse arvosana alasvetovalikosta. Ainereaali / vieras kieli
    -kohdassa voit lisätä korkeintaan kaksi ainetta. Jos olet
    suorittanut kansainvälisen ylioppilastutkinnon (EB, IB tai RP/DIA),
    valitse laskuriin arvosanojasi vastaavat suomalaisen ylioppilastutkinnon arvosanat.</p>
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

        <p>Lisää ainereaaleja / vieras kieli</p>
          {children.map(child => child)}
          <button onClick={add}>Lisää aine</button>
          <button onClick={remove}>Poista viimeisin kenttä</button>
        <br/>
        <button type='submit'>Laske</button>
      </Form>
      <p className="formMessage" style={{display: (message === '') && 'none'}}>{message}</p>
      <Results totalS={totalS} title={title}/>
    </div>
  )
}

export default HSForm
