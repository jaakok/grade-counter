import React from 'react'
import {score, grades} from './hsScoreTable'

const count = ({data, totalS, setTotalS}) => {

  const dataArray = Object.keys(data).map(key => data[key])

  const indexed = dataArray.flatMap(d => score.filter(s => s.scores === d.grade.toLowerCase()))

  console.log(indexed)

  //Find correct subject from score table
  //Match grade score with grade table index value
  const total = score
    .filter(s => s.id === data[0].name)
    .map(s => s.scores[0])

  console.log(total)
  setTotalS(total)
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
