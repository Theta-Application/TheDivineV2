import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import "../css/team.css";
import fintist from "../img/TeamPics/Fintist.PNG";
import vigz from "../img/TeamPics/Vigz.PNG";
import chem from "../img/TeamPics/ChemicalMessiah.jpg";
import aq from "../img/TeamPics/AlienQueen.png";
import luxio from "../img/TeamPics/Luxio.png";
import useWindowDimensions from "./WindowSize";

function Team() {
  const { width, height } = useWindowDimensions();

  if (width > 1141 && height > 841) {
    return (
      <AbsoluteWrapper>
        <div className="teamCards">
          <div className="memberCard">
            <h1>FINTIST</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/fintist"
            >
              <div class="container">
                <img src={fintist} alt="fintist" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
            <h4>
              Artist <br />
              Project Manager
            </h4>
            <div className="pText">
              <p>
                ...a traditional and digital artist with a focus in realism,
                illustrations and media content. She has a background working in
                finance and investments.
              </p>
            </div>
          </div>
          <div className="memberCard">
            <h1>Vigz</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/anthonyvigz"
            >
              <div class="container">
                <img src={vigz} alt="vigz" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
            <h4>
              Lead Developer <br />
              Project Manager
            </h4>
            <div className="pText">
              <p>
                ...a software engineer from Boston with an extensive graphic
                design and video production portfolio.
              </p>
            </div>
          </div>
          <div className="memberCard">
            <h1>ChemicalMessiah</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/thedirtgod"
            >
              <div class="container">
                <img src={chem} alt="chem" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
            <h4>
              Marketing <br />
              Art Direction
            </h4>
            <div className="pText">
              <p>
                ...a pop surreal collage artist from Philadelphia with 20+ years
                of art & graphic design experience.
              </p>
            </div>
          </div>
          <div className="memberCard">
            <h1>AlienQueen</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/alienqueennft"
            >
              <div class="container">
                <img src={aq} alt="aq" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
            <h4>
              Marketing <br />
              Art Direction
            </h4>
            <div className="pText">
              <p>
                ...a psychedelic illustrator with a background in Computer
                Animation and over 15 years of experience in concept art and
                game development.
              </p>
            </div>
          </div>
          <div className="memberCard">
            <h1>Luxio</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/luxionft"
            >
              <div class="container">
                <img src={luxio} alt="luxio" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
            <h4>
              Head Moderator <br />
              Developer
            </h4>
            <div className="pText">
              <p>
                ...our rock. Luxio is a web developer with an impressive history
                in gaming concept and community moderation.
              </p>
            </div>
          </div>
        </div>
      </AbsoluteWrapper>
    );
  } else {
    return (
      <AbsoluteWrapper>
        <div className="tinyCards">
          <div className="memberCard">
            <h1>FINTIST</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/fintist"
            >
              <div class="container">
                <img src={fintist} alt="fintist" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="memberCard">
            <h1>Vigz</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/anthonyvigz"
            >
              <div class="container">
                <img src={vigz} alt="vigz" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="memberCard">
            <h1>ChemicalMessiah</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/thedirtgod"
            >
              <div class="container">
                <img src={chem} alt="chem" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="memberCard">
            <h1>AlienQueen</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/alienqueennft"
            >
              <div class="container">
                <img src={aq} alt="aq" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="memberCard">
            <h1>Luxio</h1>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/luxionft"
            >
              <div class="container">
                <img src={luxio} alt="luxio" width="150px" />
                <div class="overlay">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </AbsoluteWrapper>
    );
  }
}

export default Team;
