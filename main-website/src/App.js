import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import AbsoluteWrapper from './components/AbsoluteWrapper';
import './App.css';
import './css/landingpage.css';

function App() {

  let location = useLocation();

  let transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <AbsoluteWrapper>
      <div className="App">
        <nav className="navbar">
          <h1>ANTHONY VIGLIOTTA</h1>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <a href="#" >Skills</a>
            <a href="#" >Work</a>
            <a href="#" >Resume</a>
            <a href="#" >Contact</a>
          </div>
        </nav>
        <div>
          {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </animated.div>
          ))} 
      </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default App;
