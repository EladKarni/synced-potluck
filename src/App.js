import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Events from './Components/Events/Events'
import Profile from './Components/Profile/Profile'

import './App.css'

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Events} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/invitation" exact component={Events} />
      </Switch>
      <Navigation />
    </div>
  </Router>
)

export default App
