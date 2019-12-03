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
              <Link to='/pistelaskuri/ylioppilas/'>Ylioppilastutkinto</Link>
            </li>
            <li>
              <Link to='/pistelaskuri/ammatillinen/'>Ammatillinen perustutkinto</Link>
            </li>
          </ul>
        </nav>

        <p>Aloita valitsemalla joko ylioppilastutkinto tai ammatillinen perustutkinto.
          Tutustu huolellisesti pisteytysmalliin ja sen ohjeisiin. Pistelaskuria voit
          käyttää apuvälineenä suorittamasi tutkinnon todistusvalinnan pisteiden laskemiseen.</p>
        <Route path='/pistelaskuri/' exact component={Front} />
        <Route path='/pistelaskuri/ammatillinen/' render={(props) => <VocForm {...props}/> }/>
        <Route path='/pistelaskuri/ylioppilas/' render={(props) => <HSForm {...props}/> }/>
      </div>
    </Router>
  )
}

export default App;
