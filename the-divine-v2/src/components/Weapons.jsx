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

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    mintNFT(mintAmount, walletAddress);
  };

  const onMintNumberChange = (event) => {
    setMintAmount(event.target.value)
    console.log("MINT AMOUNT", event.target.value)
  }

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
            <select onChange={onMintNumberChange}>
                <option value="1">1 Weapon</option>
                <option value="2">2 Weapons</option>
                <option value="3">3 Weapons</option>
                <option value="4">4 Weapons</option>
                <option value="5">5 Weapons</option>
                <option value="6">6 Weapons</option>
                <option value="7">7 Weapons</option>
                <option value="8">8 Weapons</option>
                <option value="9">9 Weapons</option>
                <option value="10">10 Weapons</option>
                <option value="11">11 Weapons</option>
                <option value="12">12 Weapons</option>
                <option value="13">13 Weapons</option>
                <option value="14">14 Weapons</option>
                <option value="15">15 Weapons</option>
                <option value="16">16 Weapons</option>
                <option value="17">17 Weapons</option>
                <option value="18">18 Weapons</option>
                <option value="19">19 Weapons</option>
                <option value="20">20 Weapons</option>
            </select>
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
