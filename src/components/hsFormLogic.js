import {score, grades} from './hsScoreTable'

const count = (data) => {
  console.log(data)
  data.0.map(e => {
    return (
      console.log(e, e.grade, e.name)
    )
  })
}

export default count
