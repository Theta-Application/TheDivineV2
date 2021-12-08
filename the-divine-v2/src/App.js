import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import AbsoluteWrapper from "./components/AbsoluteWrapper";
import NavBar from "./components/NavBar";
import "./App.css";
import "./css/landingpage.css";

function App() {
  let location = useLocation();

  if (location.pathname === "/") {
    document.body.className = "mainbody";
  } else if (
    location.pathname === "/skills" ||
    location.pathname === "/work" ||
    location.pathname === "/resume" ||
    location.pathname === "/contact"
  ) {
    document.body.className = "skillsbody";
  } else {
    document.body.className = "altbody";
  }

  let transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <AbsoluteWrapper>
      <NavBar />
      <div className="App">
        <div>
          {transitions.map(({ item: location, props, key }) => (
            <animated.div key={key} style={props}>
              <Routes location={location}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/skills" element={<Skills />} />
                <Route exact path="/work" element={<Work />} />
                <Route exact path="/contact" element={<Contact />} />
              </Routes>
            </animated.div>
          ))}
        </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default App;
