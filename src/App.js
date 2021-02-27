import React from 'react';
import { BrowserRotuer as Router, Route, Switch } from 'react-router-dom';

import Consulting from '';
import Services from '';
import About from '';
import Contact from '';
import Home from '';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/consulting">
          <Consulting />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
