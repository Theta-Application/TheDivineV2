import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import "../css/standup.css";
import { Spring } from "react-spring/renderprops";
import os from "../img/os.png";
import sucolor from "../img/sucolors.png"

function StandUp() {
  return (
    <AbsoluteWrapper>
      <div className="roadmapPage">
        <div className="osAndSuLinks">
        <a
          href="https://opensea.io/collection/dragons-of-the-valkyrie"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={os} alt="opensea" id="os" />
        </a>
        <a
          href="https://standuptocancer.org/ "
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={sucolor} alt="opensea" id="os" />
        </a>
        </div>
        <h5 id="drakes">- THE DRAGONS OF THE VALKYRIE -</h5>
        <div className="allBlocks">
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="300">
            {(props) => (
              <div style={props} className="community">
                {" "}
                <div className="comList">
                  <div className="textSection">
                    <p>
                      We are so very pleased to announce that we are
                      collaborating with{" "}
                      <a
                        style={{ textDecoration: "none", color: "lightblue" }}
                        href="www.StandUpToCancer.org"
                      >
                        Stand Up To Cancer
                      </a>
                      ! The Divine launched an auction of 10 pieces of
                      artwork by our very own FINTIST all to benefit Stand Up To
                      Cancer. Stand Up To Cancer collaborated with Medically
                      Home on their float, "The Spirit of Perseverance" in the
                      2022 national Rose Parade. The inspirational float is of a
                      knight slaying a dragon, representing the spirit of
                      perseverance against obstacles like cancer. These
                      auctioned pieces represent the significance of the
                      Rose Parade float as well as expand on the lore of The
                      Divine
                    </p>
                    <p>
                      The auctions, titled{" "}
                      <span style={{ color: "gold" }}>
                        “Dragons of The Valkyrie”
                      </span>{" "}
                      are 10 elemental dragons to match their Divine Valkyrie
                      counterparts. They were auctioned off with 100% of the
                      initial sale proceeds going to Stand Up To Cancer. After
                      many meetings and discussions, the introduction of these
                      Divine dragons felt like an authentic extension to the
                      story of The Divine, and illustrates a powerful message of
                      perseverance in the face of cancer
                    </p>
                    <p>
                      The team and I are so very thankful that we
                      collaborated with such an amazing cause and one so close
                      to our hearts. We are humbled to launch the first ever NFT
                      fundraising campaign to benefit SU2C and look forward to
                      many more potential collaborations in the long term. Many
                      of you have already seen how incredibly charitable the
                      space has come to be - we are honored to be a part of this
                      movement and feel as though this truly portrays the
                      mission of The Divine - a movement for the greater good.
                    </p>
                  </div>
                  <div className="textSection">
                    <h4>FAQ</h4>
                    <h5>Are these the Valkyrie companions?</h5>
                    <p>
                      These dragons are NOT the Valkyrie companions; they are
                      the Elder Drakes, though they do share the same elemental
                      traits. Once companions are launched, Valkyrie holders
                      should be expecting a different Divine beast.
                    </p>
                    <h5>
                      This is great for charity, but how is this helping the
                      community?
                    </h5>
                    <p>
                      The biggest problem in this space right now is visibility,
                      and this collaboration will help expand our audience and
                      reach new people – all while supporting those affected by
                      cancer. 1 in 2 men and 1 in 3 women in the US will be
                      diagnosed with cancer in their lifetimes. This affects our
                      community too. While we support cancer research, this
                      project can also drive a lot of new people into the NFT
                      space AND into The Divine!
                    </p>
                    <h5>When was the auction?</h5>
                    <p>
                      The auctions ran 10 days starting on January
                      3rd, 2022.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Spring>
          {/* <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="600">
            {(props) => (
              <div style={props} className="sellout">
                {" "}
                <h4>SELLOUT ALLOCATIONS</h4>
                <div className="selList">
                  <h6>Community Wallet (Giveaways)</h6>
                  <h6>Community Art Purchases</h6>
                  <h6>
                    Donation to Charity
                    <br /> of Community Choice
                  </h6>
                </div>
              </div>
            )}
          </Spring>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="900">
            {(props) => (
              <div style={props} className="preparation">
                {" "}
                <h4>THE PREPARATION</h4> <h5>Future Utility</h5>
                <div className="prepList">
                  <h6>Weapon & Companion Free Mints</h6>
                  <h6>The Aegis Free Mint to Prophets</h6>
                  <h6>Royalty Burn & Mint / Bandage Reveal</h6>
                  <h6>The Arc's Elixir...</h6>
                </div>
              </div>
            )}
          </Spring>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="1200">
            {(props) => (
              <div style={props} className="erad">
                {" "}
                <h4>THE ERADICATION</h4> <h5>Generation 2</h5>
                <div className="eradList">
                  <h6>Masculine Warriors Invade The Heavens</h6>
                </div>
              </div>
            )}
          </Spring> */}
        </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default StandUp;
