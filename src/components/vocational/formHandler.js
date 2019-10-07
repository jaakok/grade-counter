import {commObj, avgObj} from './vocScores'

const count = ({data, setTotalS, gradeSys}) => {

  const inputGrades = [ data.math.grade, data.comm.grade, data.soc.grade ]

  const commGrades = inputGrades.map(g => commObj.grade5[g - 1])

  const values = data.avg.grades.split(',')
  const average = values
    //Turn array values into integers
    //And count the sum of values with .reduce()
    //And divide by length of array to get average value
    .map(a => parseInt(a))
    .reduce((a,b) => a + b, 0)
    / values.length


    //Reduce table with average values
    //Accumulate when current value is higher or equal to average
    const index = avgObj.gradeTable5.reduce((i, g) => {
      return g >= average ? i += 1 : i
    }, 0)

    //Use index to pick out score from scores table
    console.log(index)
    console.log(average)
    console.log(avgObj.scores[index])

    const total = commGrades.reduce((a, b) => a + b, 0) + avgObj.scores[index]
    console.log(total)
    setTotalS(total)
  }

export default count
