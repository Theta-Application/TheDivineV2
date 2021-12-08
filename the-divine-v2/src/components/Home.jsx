import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import resume from "../img/AnthonyVigliottaResume.pdf";
import "../css/resume.css";

function Home() {
  document.body.classList.remove("newpage");

  return (
    <AbsoluteWrapper>
      <div className="homeBlock">
        <button className="hello">Hello!</button>
        <h2>I am Anthony.</h2>
        <p>
          I am a Full Stack Web Developer highly skilled in an array of
          front-end and back-end languages and frameworks. I have a passion for
          crisp design and flawless functionality.
        </p>
        <div className="middle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/anthonyvigz"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anthonyvigliotta/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/anthonyvigz"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href={resume}>
            <i className="fas fa-file"></i>
          </a>
        </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default Home;
