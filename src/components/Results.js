import React from 'react'
import {score, grades} from './hsScoreTable'

const count = ({data, totalS, setTotalS}) => {

  //Turn unform data object into an array
  const dataArray = Object.keys(data).map(key => data[key])

  //Match input values with score table entries
  const matched = dataArray.flatMap(d => {
    let match = score.filter(s => s.id === d.name)
    console.log(d.grade)
    match = {...match, grade: d.grade}
    return match
  })

  console.log(dataArray)
  console.log(matched)

  //Match input grades with score table scores
  function matchBy(id, grade) {
    const index = grades.filter(g => g.id === grade)
    index.map(i => i.index)
    score.filter(s => s.id === id)
  }

  console.log(matched.map(m => matchBy(m.id, m.grade)))
  console.log(score.filter(s => s.id === 'mathLong').map(s => s.scores[0]))

  setTotalS()
}

const Results = (totalS) => {
  return (
    <div>
      <h3>Kokonaispisteet</h3>
      <p>Pisteet: {totalS.total[0]}</p>
    </div>
  )
}

export {count}
export default Results
