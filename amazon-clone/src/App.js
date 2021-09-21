import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './static/components/Header';
import Home from './static/components/Home';
import Checkout from './static/components/Checkout';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/checkout">
        <Header/>
        <Checkout/>
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
