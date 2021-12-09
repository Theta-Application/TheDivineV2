import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import "../css/roadmap.css";
import { Spring } from "react-spring/renderprops";

function Roadmap() {
  return (
    <AbsoluteWrapper>
      <div className="roadmapPage">
        <h3>PATH TO INFINITY</h3>
        <div className="allBlocks">
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="300">
            {(props) => (
              <div style={props} className="community">
                {" "}
                <div className="comList">
                  <div className="textSection">
                    <h4>COMMUNITY</h4>
                    <h5>Uplifting Artists:</h5>
                    <p>
                      The Divine Team plans to enrich and engage its community.
                      We will be holding several artist contests: derivatives,
                      fan art, and auctioned fan art collections. We also plan
                      to partner with big name artists and allow Divine holders
                      the chance to bid or win spotlight 1/1 pieces!
                    </p>
                    <h5>Art Curation Club:</h5>
                    <p>
                      The Divine plans to hold Art Curation Clubs within the
                      tiers of The Divine. Each month a specific tier will have
                      the opportunity to share and discuss some of their
                      favorite artists and pieces of work from the NFT
                      Community. This will be an opportunity for the Divine Team
                      to purchase some of these suggestions and will play into
                      our frequent community purchases from independent artists.
                    </p>
                    <h5>Merchandise and Prints:</h5>
                    <p>
                      Divine holders will have the opportunity to buy a
                      scannable print of their Divine via our team. We will also
                      offer merchandise for all as well as exclusive merchandise
                      for specific tiers/attributes within the Divine. We will
                      also be doing merchandise and print giveaways to Divine
                      holders!
                    </p>
                    <h5>The Sky - Community Spaces:</h5>
                    <p>
                      The Divine Team will be holding a regularly scheduled
                      Twitter Spaces in order to engage with the community,
                      spotlight artists and collectors within the space, and
                      give the community an opportunity to chat, hangout, and
                      ask questions with The Divine Team!
                    </p>
                  </div>
                  <div className="textSection">
                    <h4>SELLOUT ALLOCATIONS</h4>
                    <h5>Community Wallet:</h5>
                    <p>
                      Upon sellout, the team plans to allocate a portion of the
                      proceeds to The Divine community wallet. This wallet will
                      be used for all sorts of giveaways to the community as
                      well as purchasing art from the NFT community.
                    </p>
                    <h5>Charity:</h5>
                    <p>
                      Upon sellout, a portion of proceeds will be donated to a
                      charity of the community’s choice!
                    </p>
                  </div>
                  <div className="textSection">
                    <h4>THE PREPARATION (FUTURE UTILITIES)</h4>
                    <p>
                      In The Preparation for the next Eradication, the realm of
                      the Divine must be fully equipped for the impending Fight
                      for The Heavens.
                    </p>
                    <h5>Soulbound Companions and Weapons:</h5>
                    <p>
                      Your Divine will have the opportunity to be soulbound with
                      unique and fantastical companions in the future. They will
                      also have the opportunity to reunite with unique and
                      powerful weapons lost in the last eradication. Companions
                      and weapons will be divinely different between specific
                      tiers and attributes. <br />
                      <br />
                      Prophets of The Divine, our earliest community members,
                      will have the opportunity to receive The Aegis Divine. The
                      Aegis is an incredibly unique and powerful weapon that
                      plays a large part in the impending Eradication.
                    </p>
                    <h5>Royalty Burn & Mint:</h5>
                    <p>
                      The Royalty of The Divine have been to and seen The Fire.
                      Battered and bloody, they hide the truth behind their
                      dirtied bandages. Royalty holders will have the
                      opportunity to burn the bandages off of their Royalty.
                      What could The Royalty be hiding…?
                    </p>
                    <h5>The Arc's Elixir:</h5>
                    <p>
                      In an effort to engage the community and have members work
                      together in a way that hasn’t be done before to aid in the
                      preparation for the Eradication, The Arc has created The
                      Arc’s Elixir. There are only 3 Elixirs that will be
                      randomly airdropped to 3 Divine holders wallets. The
                      mission is to get all 3 of the Elixirs in one wallet to
                      fuse and burn together, revealing a secret item that will
                      aid in the fight and ultimately release a reward for every
                      Divine holder…
                    </p>
                  </div>
                  <div className="textSection">
                    <h4>THE ERADICATION (GENERATION 2)</h4>
                    <p>
                      The long journey ahead of the realm of the Divine builds
                      up to the great fight of The Heavens: The Eradication. As
                      the gates open, the second generation of The Divine is
                      released… masculine warriors begin to invade The Heavens…
                    </p>
                  </div>
                  <div className="textSection">
                    <h4>A REMINDER FROM THE TEAM</h4>
                    <p>
                      This roadmap is a reflection of the things we can
                      confidently deliver to our community in the course of this
                      collection’s journey! We have big plans and dreams for The
                      Divine but cannot make any promises on these additional
                      surprises yet. What we can promise, is that upon joining
                      The Divine you will embark on an exciting and fulfilling
                      long term journey with our community and team. We are so
                      excited for what’s ahead and cannot wait to get started!
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

export default Roadmap;
