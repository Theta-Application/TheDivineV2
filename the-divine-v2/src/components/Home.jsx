import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import os from "../img/os.png";

function Home() {
  document.body.classList.remove("newpage");

  return (
    <AbsoluteWrapper>
      <div className="homeBlock">
        <a
          href="https://opensea.io/collection/the-divine-nft"
          target="_blank"
          rel="noreferrer"
        >
          <div className="osButton">
            <img src={os} alt="opensea" id="os" />
            <span id="rightarrow" className="bounce">
              <i className="fas fa-chevron-right"></i>
            </span>
          </div>
        </a>
        <h2>Fight for the Heavens.</h2>
        <p>
          4,444 hand-drawn, cosmic, angelic warriors that protect and nurture
          all that is good in the observable universe of their realm.
        </p>
        <div className="mintBlock">
          <button className="shine-box">MINT</button>
        </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default Home;
