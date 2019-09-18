import {score, grades} from './hsScoreTable'

const count = (data) => {

  //Match input grade with index of grade table
  const grade = grades.filter(g => g.id === data.mathLong.grade)

  //Find correct subject from score table
  //Match grade score with grade table index value
  const total = score
    .filter(s => s.id === data.mathLong.name)
    .map(s => s.scores[grade[0].index])

  console.log(total)
}

export default count
