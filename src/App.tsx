import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Dashboard from "./dashboard/Dashboard";
import ExpensesContainer from "./expenses/ExpensesContainer";
import Category from "./category/Category";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <div className="PageContent">
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/expenses">
              <ExpensesContainer />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
