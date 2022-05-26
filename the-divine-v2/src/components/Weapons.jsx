import React, { useState, useEffect } from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import os from "../img/os.png";
import {
  getCurrentWalletConnected,
  totalSupply,
  mintNFT,
  connectWallet
} from "../utils/interact";

function Weapons() {
  // Minter information
  const [walletAddress, setWallet] = useState("");
  const [, setStatus] = useState("");

  const [supply, setSupply] = useState(0);

  // // Mint amount
  const [mintAmount, setMintAmount] = useState(1);

  document.body.classList.remove("newpage");

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            href={`https://metamask.io/download.html`}
            rel="noopener noreferrer"
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  useEffect(() => {
    async function fetchData() {
      const { address, status } = await getCurrentWalletConnected();
      const supply = await totalSupply();
      setSupply(supply);
      setWallet(address);
      setStatus(status);

      addWalletListener();
    }
    fetchData();
  }, []);

  const updateMintAmount = () => {
    if (mintAmount !== 20) {
      setMintAmount(mintAmount + 1);
    } else {
      setMintAmount(1);
    }
  };

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    mintNFT(mintAmount, walletAddress);
  };

  return (
    <AbsoluteWrapper id="home">
      <div className="homeBlock">
        <div className="iconLinks">
        <a
          href="https://opensea.io/collection/divine-weapons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="osButton">
            <img src={os} alt="opensea" id="os" />
            <span id="rightarrow" className="bounce">
              <i className="fas fa-chevron-right"></i>
            </span>
          </div>
        </a>
        <a target="_blank"rel="noopener noreferrer" href="https://twitter.com/thedivinenft"><i className="fab fa-twitter"></i></a>
          <a  target="_blank" rel="noopener noreferrer" href="https://discord.gg/the-divine"><i className="fab fa-discord"></i></a>
        </div>
        <h2>Soul Bound Weapons</h2>
        <p>
          The Soul Bound weapons are a free mint for every Divine holder. You can mint one 
          weapon per Divine in the wallet you are minting from. The Divine needed to be in the wallet
          on Wednesday 5/25, at 9pm EST to be eligible.

          Mint opens at 8pm EST on Thursday 5/26.
        </p>
        <div className="allMintingInfo">
          <div className="mintBox">
            <button onClick={onMintPressed} style={{ backgroundColor: "#bbd6e5", color: "#2599fe" }} className="shine-box">TO ARMS</button>
          </div>
          <div className="totalAndConnect">
            <button onClick={connectWalletPressed}>CONNECT</button>
            <button onClick={updateMintAmount}>
              {mintAmount} WEAPON{mintAmount === 1 ? "" : "S"}
            </button>
          </div>
        </div>
        <div className="supply">
          <h2>
            <span style={{ color: "gold" }}>{supply}</span>/4444 weapons are
            wielded.
          </h2>
        </div>
        </div>
    </AbsoluteWrapper>
  );
}

export default Weapons;
