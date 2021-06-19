import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import Expenses from './Expenses'
import Category from './Category'
import Sidebar from './Sidebar'

function App() {
  return (
    <Router>
      <div className="App">
        <Expenses />
        <div className="content">
          <Switch>
            <Route exact path="./Dashboard">
              <Dashboard />
            </Route>
            <Route path="./Expenses">
              <Expenses />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
