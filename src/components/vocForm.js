import React, { useState } from 'react'
import { Form, Select, Scope, Input } from '@rocketseat/unform'

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
    {id: '1', title: '1'},
    {id: '2', title: '2'},
    {id: '3', title: '3'}
  ]

  const grades5 = [
    {id: '1', title: '1'},
    {id: '2', title: '2'},
    {id: '3', title: '3'},
    {id: '4', title: '4'},
    {id: '5', title: '5'}
  ]

  const validateInput = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <button onClick={selectGrading}>Pisteytysjärjestelmä: {
          gradeSys
          ? '1-3'
          : '1-5'
        }</button>
        <br />
        <Scope path='base'>
          <label>Viestintä- ja vuorovaikutusosaaminen</label>
          <Select name='grade' options={
            gradeSys
            ? grades3
            : grades5
          } />
          <br />
          <label>Matemaattis-luonnontieteellinen osaaminen</label>
          <Select name='grade' options={
            gradeSys
            ? grades3
            : grades5
          } />
          <br />
          <label>Yhteiskunta- ja työelämäosaaminen</label>
          <Select name='grade' options={
            gradeSys
            ? grades3
            : grades5
          } />
          <br />
        </Scope>
        <br/>
        <Scope path='avg'>
        <label>Tutkinnon arvosanat pilkuilla erotettuna</label>
        <Input name='grades' type='text' onKeyPress={validateInput}/>
        </Scope>
        <br />
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

export default VocForm
