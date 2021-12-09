import React, { useState } from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import "../css/tiers.css";
import { Transition } from "react-transition-group";
import divine from "../img/BACKGROUNDDIVINE.png";

function Tiers() {
  const [switcher, setSwitch] = useState(false);

  const types = [
    {
      tierName: "THE VINDICATORS",
    },
    {
      tierName: "THE APOSTLES",
    },
    {
      tierName: "THE ROYALTY",
    },
    {
      tierName: "THE VALKYRIE",
    },
    {
      tierName: "THE TRINITY",
    },
    {
      tierName: "THE ARC",
    },
  ];

  const [currentTierIndex, setIndex] = useState(0);

  const goRight = () => {
    if (currentTierIndex === 5) {
      return;
    }
    setIndex(currentTierIndex + 1);
  };

  const goLeft = () => {
    if (currentTierIndex === 0) {
      return;
    }
    setIndex(currentTierIndex - 1);
  };

  return (
    <AbsoluteWrapper id="tiers">
      <div className="tiersPage">
        <button
          style={{
            opacity: currentTierIndex === 0 ? 0 : 1,
            transition: "0.5s",
          }}
          disabled={currentTierIndex === 0}
          onClick={() => goLeft()}
          className="nextTier"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <Tier switcher={currentTierIndex === 0} divine={types[0]} />
        <Tier switcher={currentTierIndex === 1} divine={types[1]} />
        <Tier switcher={currentTierIndex === 2} divine={types[2]} />
        <Tier switcher={currentTierIndex === 3} divine={types[3]} />
        <Tier switcher={currentTierIndex === 4} divine={types[4]} />
        <Tier switcher={currentTierIndex === 5} divine={types[5]} />
        <button
          onClick={() => goRight()}
          style={{
            opacity: currentTierIndex === 5 ? 0 : 1,
            transition: "0.5s",
          }}
          disabled={currentTierIndex === 5}
          className="nextTier"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </AbsoluteWrapper>
  );
}

export default Tiers;

function Tier(props) {
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const duration = 600;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    height: "100%",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    margin: "20px auto",
    position: "absolute",
    top: "50%" /* position the top  edge of the element at the middle of the parent */,
    left: "50%" /* position the left edge of the element at the middle of the parent */,
    transform: "translate(-50%, -50%)",
    zIndex: -5,
  };

  const { tierName } = props.divine;

  return (
    <Transition in={props.switcher} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="tier">
            <h1 className="tierNumber">Tier 1</h1>
            <h2 className="tierType">{tierName}</h2>
            <div className="imageAndBorder">
              <img src={divine} alt="divine" />
            </div>

            <p className="pDivine">
              The Vindicators are souls torn from The Arc. During the
              Eradication, the Arc realized they were outnumbered and forced
              their soul into separate beings to independently grow stronger.
              The downside, they are mortal, and many were lost in the battle.
              The remaining Vindicators stand ready for the next Eradication and
              ready to give their life protecting the Heavens.
            </p>
          </div>
        </div>
      )}
    </Transition>
  );
}
