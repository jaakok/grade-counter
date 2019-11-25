import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Front from './components/Front'
import VocForm from './components/vocational/vocForm'
import HSForm from './components/highSchool/hsForm'

const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Alku</Link>
            </li>
            <li>
              <Link to='/ylioppilas/'>Ylioppilastutkinto</Link>
            </li> 
            <li>
              <Link to='/ammatillinen/'>Ammatillinen perustutkinto</Link>
            </li>
          </ul>
        </nav>
        <Route path='/' exact component={Front} />
        <Route path='/ammatillinen/' render={(props) => <VocForm {...props}/> }/>
        <Route path='/ylioppilas/' render={(props) => <HSForm {...props}/> }/>
      </div>
    </Router>
  )
}

export default App;
