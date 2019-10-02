import React, { useState } from 'react'
import {score, grades} from './hsScoreTable'

const count = ({data, totalS, setTotalS}) => {

  //Turn unform data object into an array
  const dataArray = Object.keys(data).map(key => data[key])

  //Match input values with score table entries
  const matched = dataArray.flatMap(d => {

    //Create an index value based on the input grade
    const index = grades.filter(g => g.id === d.grade)

    //Filter input subjects from score table
    //And return only indexed score value
    const match = score
      .filter(s => s.id === d.name)
      .map(s => s.scores[index[0].index])

    //Return matched score value
    return match
  })

  console.log(matched)


  setTotalS(matched.reduce((a, b) => a + b, 0))
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
