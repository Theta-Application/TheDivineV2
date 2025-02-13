import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import "../css/about.css";
import { Spring } from "react-spring/renderprops";
import useWindowDimensions from "./WindowSize";

function Story() {
  const { width } = useWindowDimensions();

  return (
    <AbsoluteWrapper>
      <div className="aboutBlock">
        <div className="aboutInfo">
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="500">
            {(props) => (
              <div style={props}>
                <h1>Do not falter, the <span style={{ fontWeight: "bold", color: "gold" }}>Eradication</span> cometh.</h1>
              </div>
            )}
          </Spring>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="700">
            {(props) => (
              <div style={props}>
                <p>
                  The Divine are guided and created by the omniavelent Arc and
                  reside in The Heavens. From The Fire, the dark world below The
                  Heavens, demonic spawns arose to fight and overtake The Arc,
                  this was the first Eradication. Ultimately, The Fire failed,
                  but this left a tainted mark on The Arc and The Heavens; the
                  all-knowing knew this wouldn't be the last time there was a
                  fight, and losing everything was surely possible.
                </p>
              </div>
            )}
          </Spring>
        </div>
      </div>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="1100">
        {(props) => (
          <div style={props}>
            <div className="videosBox">
              <a
                href="https://vimeo.com/user153609926"
                target="_blank"
                rel="noopener noreferrer"
                className="videos"
                id="videosLink"
              >
                <button className="videos-box">
                  VIDEOS <i className="fas fa-video"></i>
                </button>
              </a>
            </div>
          </div>
        )}
      </Spring>
      {width < 575 && <div className="emptySpace"></div>}
    </AbsoluteWrapper>
  );
}

export default Story;
