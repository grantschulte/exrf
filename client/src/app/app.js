// @flow

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../home/home";
import About from "../about/about";

import "./app.scss";

function App() {
  return (
    <Router>
      <div id="app">
        <header id="app__header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>

        <div id="app__page">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
