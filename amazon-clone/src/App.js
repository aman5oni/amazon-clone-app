import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './static/components/Header';
import Home from './static/components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/checkout">
          <Header/>
          <h1>HEllo I Am A Checkout</h1>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
       
      </Switch>
    </div>
    </Router>
  );
}

export default App;
