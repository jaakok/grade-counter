import React from 'react'
import {score, grades} from './hsScoreTable'

const count = ({data, totalS, setTotalS}) => {

  //Match input grade with index of grade table
  const grade = grades.filter(g => g.id === data.mathLong.grade)

  //Store indexed value in new variable
  const index = grade[0].index

  //Find correct subject from score table
  //Match grade score with grade table index value
  const total = score
    .filter(s => s.id === data.mathLong.name)
    .map(s => s.scores[index])

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
