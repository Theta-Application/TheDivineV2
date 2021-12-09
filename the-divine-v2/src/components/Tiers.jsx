import React, { useState } from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import "../css/tiers.css";
import { Transition } from "react-transition-group";

function Tiers() {
  const [switcher, setSwitch] = useState(false);

  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0.5 },
    entered: { opacity: 1 },
    exiting: { opacity: 0.5 },
    exited: { opacity: 0 },
  };

  return (
    <AbsoluteWrapper>
      <div className="tiersPage">
        <Transition in={switcher} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              Hello
            </div>
          )}
        </Transition>

        <button onClick={() => setSwitch(!switcher)}>here</button>
      </div>
    </AbsoluteWrapper>
  );
}

export default Tiers;
