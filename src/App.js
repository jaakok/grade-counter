import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Front from './components/Front'
import VocForm from './components/vocational/vocForm'
import HSForm from './components/highSchool/hsForm'

const App = () => {
  const [totalS, setTotalS] = useState('')

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Alku</Link>
            </li>
            <li>
              <Link to='/ammatillinen/'>Ammatillinen perustutkinto</Link>
            </li>
            <li>
              <Link to='/ylioppilas/'>Ylioppilastutkinto</Link>
            </li>
          </ul>
        </nav>
        <Route path='/' exact component={Front} />
        <Route path='/ammatillinen/' render={(props) => <VocForm {...props} totalS={totalS} setTotalS={setTotalS} /> }/>
        <Route path='/ylioppilas/' render={(props) => <HSForm {...props} totalS={totalS} setTotalS={setTotalS} /> }/>
      </div>
    </Router>
  )
}

export default App;
