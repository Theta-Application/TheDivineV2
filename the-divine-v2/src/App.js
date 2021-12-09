import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Home from "./components/Home";
import Story from "./components/Story";
import Tiers from "./components/Tiers";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import AbsoluteWrapper from "./components/AbsoluteWrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import "./css/landingpage.css";
import useWindowDimensions from "./components/WindowSize";

function App() {
  let location = useLocation();
  const { width } = useWindowDimensions();

  if (width <= 575) {
    document.body.className = "phonebody";
  } else if (location.pathname === "/") {
    document.body.className = "mainbody";
  } else if (
    location.pathname === "/story"
  ) {
    document.body.className = "skillsbody";
  } else if (
    location.pathname === "/tiers"
  ) {
    document.body.className = "altbody";
  } else {
    document.body.className = "roadmapbody";
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
                <Route exact path="/story" element={<Story />} />
                <Route exact path="/tiers" element={<Tiers />} />
                <Route exact path="/roadmap" element={<Roadmap />} />
                <Route exact path="/team" element={<Team />} />
              </Routes>
            </animated.div>
          ))}
        </div>
      </div>
      {width > 575 && <Footer />}
    </AbsoluteWrapper>
  );
}

export default App;
