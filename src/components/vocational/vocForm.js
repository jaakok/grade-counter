import React, { useState } from 'react'
import { Form } from '@rocketseat/unform'
import FormFields from './Formfields'
import { count } from './formHandler'
import Results from '../Results'

//Create a summary of grades
const Titles = titles => {
  const titleArray = Object.keys(titles).map(key => titles[key])
  console.log(titleArray)
  return (
    <div>
      <h5>Pisteet yksittäisistä aineista</h5>
      <p>Viestintä- ja vuorovaikutusosaaminen: {titleArray[0][0]}</p>
      <p>Matemaattis-luonnontieteellinen osaaminen: {titleArray[0][1]}</p>
      <p>Yhteiskunta- ja työelämäosaaminen: {titleArray[0][2]}</p>
      <p>Tutkinnon painotettu keskiarvo: {titleArray[0][3]}</p>
    </div>
  )
}

const VocForm = () => {

  const [totalS, setTotalS] = useState('')
  const [gradeSys, setGradeSys] = useState(true)
  const [titles, setTitles] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = data => {
    data.avg.avg
    ? count({data, setTotalS, gradeSys, titles, setTitles})
    : setMessage('Täytä myös keskiarvo')
    setTimeout(() => {
      setMessage('')
    }, 1500)
  }

  return (
    <div>
    <p>Valitse ensin oikea arvosana-asteikko ja sen jälkeen kolmen
    yhteisen tutkinnon osan arvosanat alasvetovalikosta. Täytä lisäksi
    tutkinnon painotettu keskiarvo kahden desimaalin tarkkuudella (esim. 2,67).
    </p>
      <Form onSubmit={handleSubmit}>
        <FormFields
          gradeSys={gradeSys}
          setGradeSys={setGradeSys}
          message={message}
          setMessage={setMessage}/>
        <button type='submit'>Laske</button>
      </Form>
      {titles.length > 0 &&
      <div>
        <Results totalS={totalS} />
        <Titles titles={titles}/>
      </div>
      }
    </div>
  )
}

export default VocForm
