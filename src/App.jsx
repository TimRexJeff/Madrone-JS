import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Consulting from './components/Consulting'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import MuiTheme from './components/styling/MuiTheme'

function App() {
  const theme = React.useMemo(() => createMuiTheme(<MuiTheme />))

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
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
    </ThemeProvider>
  )
}

export default App