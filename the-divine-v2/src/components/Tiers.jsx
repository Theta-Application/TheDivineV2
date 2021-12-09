import React, { useState } from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import "../css/tiers.css";
import { Transition } from "react-transition-group";
import vindicator from "../img/Vindicator.png";
import apostle from "../img/Apostle.png";
import royalty from "../img/Royalty.png";
import valkyrie from "../img/Valkyrie.png";
import trinity from "../img/Trinity.png";
import { Spring } from "react-spring/renderprops";

function Tiers() {
  const types = [
    {
      tierName: "THE VINDICATORS",
      img: vindicator,
      number: 1,
      text: "The Vindicators are souls torn from The Arc. During the Eradication, the Arc realized they were outnumbered and forced their soul into separate beings to independently grow stronger. The downside, they are mortal, and many were lost in the battle. The remaining Vindicators stand ready for the next Eradication and ready to give their life protecting the Heavens.",
    },
    {
      tierName: "THE APOSTLES",
      img: apostle,
      number: 2,
      text: "The Apostles were humans turned immortal as soon as their lives were to end. They were chosen by The Arc because of the skills and benevolence they conjured in their mortal lives. Their skills, now enhanced on a cosmic and magical scale, were and are extremely powerful weapons for the fight in the first Eradication, and the next.",
    },
    {
      tierName: "THE ROYALTY",
      img: royalty,
      number: 3,
      text: "The Royalty were Apostles that have been to, and seen, The Fire, but miraculously escaped. Their damaged, but now all evil-knowing minds, have proven useful to the other Apostles' studies. They are retired, worshipped, and revered; they will now only speak on the evils if the information were to aid the Divine in the next Eradication. Is there something they are hiding about The Fire?",
    },
    {
      tierName: "THE VALKYRIE",
      img: valkyrie,
      number: 4,
      text: "Each of them harnessing the power of a unique, elemental force, the Valkyrie are a small group of celestial warriors that mysteriously appeared from the Void. They warn the Divine of the next Eradication and how it's not going to be like the fight they had the first time. Their strengths and power have been demonstrated to almost match those of the Trinity, which stirs an uneasiness amongst the Divine.",
    },
    {
      tierName: "THE TRINITY",
      img: trinity,
      number: 5,
      text: "The Arc's thoughts come to life... created to manage the flow of time, manifest souls across the realms, and bring balance to the universes in which they reside.",
    },
    {
      tierName: "THE ARC",
      img: "",
      number: 6,
      text: "The timeless. The lifeless. The all-knowing. The consciousness conjuror. The everything.",
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
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="500">
        {(props) => (
          <div style={props} className="tiersPage">
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
        )}
      </Spring>
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

  const { tierName, img, number, text } = props.divine;

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
            <h1 className="tierNumber">Tier {number}</h1>
            <h2 className="tierType">{tierName}</h2>
            <div className="imageAndBorder">
              {!(number === 6) && <img src={img} alt="divine" />}
              {number === 6 && <div style={{ width: "50%", height: "50px" }} />}
            </div>

            <p className="pDivine">{text}</p>
          </div>
        </div>
      )}
    </Transition>
  );
}
