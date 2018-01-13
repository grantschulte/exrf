/* @flow */

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Welcome from "../welcome/welcome";

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div id="app">
        {/* Header Menu */}
        <Route exact path="/" component={Home} />
        <Route exact path="/welcome" component={Welcome} />
      </div>
    </Router>
  );
}

export default App;
