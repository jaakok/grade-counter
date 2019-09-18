import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import Voc from './components/vocational'
import HSForm from './components/hsForm'


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
              <Link to='/ammattikoulu/'>Ammattikoulu</Link>
            </li>
            <li>
              <Link to='/lukio/'>Lukio</Link>
            </li>
          </ul>
        </nav>
        <Route path='/' exact component={Index} />
        <Route path='/ammattikoulu/' component={Voc}/>
        <Route path='/lukio/' component={HSForm }/>
      </div>
    </Router>
  )
}

export default App;
