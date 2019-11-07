import {grades, totalScores} from './hsScoreTable'

const count = ({data, setTotal}) => {

  //Turn unform data object into an array
  const dataArray = Object.keys(data).map(key => data[key])

  console.log(dataArray)

  //Match input values with score table entries
  const matched = dataArray.flatMap(d => {

    //Create an index value based on the input grade
    const index = grades.filter(g => g.id === d.grade)

    //Filter input subjects from score table
    //And return only indexed score value
    const match = totalScores
      .filter(s => s.id === d.name)
      .map(s => s.scores[index[0].index])

    //Return matched score value
    return match
  })

  //Sort top 5 values and sum them
  const total = matched
    .sort((a,b) => b-a)
    .slice(0, 5)
    .reduce((a, b) => a + b, 0)

  setTotal(total)
}

export default count
