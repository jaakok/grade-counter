import {grades, totalScores} from './hsScoreTable'

const count = ({data, setTotal, title, setTitle}) => {

  //Turn unform data object into an array
  const dataArray = Object.keys(data).map(key => data[key])

  //Match input values with score table entries
  const matched = dataArray.flatMap(d => {

    //Create an index value based on the input grade
    const index = grades.filter(g => g.id === d.grade)

    //Filter input subjects from score table
    //And return only indexed score value
    const match = totalScores
      .filter(s => s.id === d.name)

    const score = match.map(m => m.scores[index[0].index])
    const foundTitle = match.map(m => m.title)
    title.push(`${foundTitle} ${score}`)
    setTitle(title)
    console.log(foundTitle, score)

    //Return matched score value
    return score
  })

  //Sort top 5 values and sum them
  const total = matched
    .sort((a,b) => b-a)
    .slice(0, 5)
    .reduce((a, b) => a + b, 0)

  setTotal(`Pisteet: ${total}`)
}

export default count
