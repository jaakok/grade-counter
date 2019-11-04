import {commObj, avgObj} from './vocScores'

const count = ({data, setTotalS, gradeSys}) => {

  const inputGrades = [ data.math.grade, data.comm.grade, data.soc.grade ]

  const grading = gradeSys ? commObj.grade3 : commObj.grade5
  const gradeTable = gradeSys ? avgObj.gradeTable3 : avgObj.gradeTable5

  const commGrades = inputGrades.map(g => grading[g - 1])

  const average = data.avg.avg

    //Reduce table with average values
    //Accumulate when current value is higher or equal to average
    const index = gradeTable.reduce((i, g) => {
      return g >= average ? i += 1 : i
    }, 0)

    //Use index to pick out score from scores table
    
    const total = commGrades.reduce((a, b) => a + b, 0) + avgObj.scores[index]
    console.log(total)
    setTotalS(total)
  }

export default count
