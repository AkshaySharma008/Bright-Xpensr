import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from './reduxstore/store';
import Header from "./components/common/header";
import AllExpenses from "./components/all-expenses";
import AddExpense from "./components/add-expense";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/all-expenses" />
            </Route>
            <Route exact path="/all-expenses">
              <AllExpenses />
            </Route>
            <Route exact path="/add-expense">
              <AddExpense />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
