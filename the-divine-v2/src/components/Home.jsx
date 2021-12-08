import React, { useState, useEffect } from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import os from "../img/os.png";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
  presaleMints,
  totalSupply,
} from "../utils/interact";

function Home() {
  // Minter information
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [supply, setSupply] = useState(0);

  const [, setPresaleTotalMints] = useState(0);

  // Mint amount
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
            rel="noreferrer"
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

  useEffect(() => {
    const setMintMessage = async () => {
      setPresaleTotalMints(await presaleMints(walletAddress));
    };
    if (walletAddress) {
      setMintMessage();
    }
  }, [walletAddress]);

  const updateMintAmount = () => {
    if (mintAmount !== 12) {
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
        <div className="allMintingInfo">
          <div className="mintBox">
            <button onClick={onMintPressed} className="shine-box">MINT</button>
          </div>
          <div className="totalAndConnect">
            <button onClick={connectWalletPressed}>CONNECT</button>
            <button onClick={updateMintAmount}>
              {mintAmount} DIVINE{mintAmount === 1 ? "" : "S"}
            </button>
          </div>
        </div>
        <div className="supply">
          <h2>
            <span style={{ color: "gold " }}>{supply}</span>/4444 warriors are
            ready.
          </h2>
        </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default Home;
