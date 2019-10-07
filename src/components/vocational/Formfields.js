import React, { useState } from 'react'
import { Select, Scope, Input } from '@rocketseat/unform'

const FormFields = ({gradeSys, setGradeSys}) => {
  const [error, setError] = useState(false)

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

  const selectGrading = event => {
    event.preventDefault()
    gradeSys
    ? setGradeSys(false)
    : setGradeSys(true)
  }

  const validateInput = (event) => {
    const regex = /^[a-zA-z]+$/

    if (event.target.value.match(regex)) {
      event.preventDefault()
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1500)
    }
  }

return (
  <div>
    <p>Valitse ensin pisteytysjärjestelmä (joko 1-3 tai 1-5)</p>
    <button onClick={selectGrading}>Pisteytysjärjestelmä: {
      gradeSys
        ? '1-3'
        : '1-5'
      }
    </button>
    <br />
    <Scope path='comm'>
      <label>Viestintä- ja vuorovaikutusosaaminen</label>
      <Select name='grade' options={
        gradeSys
          ? grades3
          : grades5
        } />
      </Scope>
    <br />
      <Scope path='math'>
        <label>Matemaattis-luonnontieteellinen osaaminen</label>
        <Select name='grade' options={
          gradeSys
            ? grades3
            : grades5
          } />
      </Scope>
    <br />
      <Scope path='soc'>
        <label>Yhteiskunta- ja työelämäosaaminen</label>
        <Select name='grade' options={
          gradeSys
            ? grades3
            : grades5
          } />
      </Scope>
    <br/>
    <Scope path='avg'>
      <label>Tutkinnon arvosanat pilkuilla erotettuna</label>
      <Input name='grades' type='text' onKeyPress={validateInput}/>
    </Scope>
    <p className={error ? 'error' : null}>{error ? 'Käytä vain numeroita ja pilkkuja' : ''}</p>
    <br />
  </div>
  )
}

export default FormFields
