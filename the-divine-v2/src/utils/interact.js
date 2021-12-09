import React from 'react';

require("dotenv").config();

const Web3 = require("web3");
const ethNetwork =
  "https://mainnet.infura.io/v3/f614a724e563453f9105be481807abb3";
const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));

const contractABI = require("./contract-abi.json");
const contractAddress = "0xA3C2E31ad437742173706578748A223DdA95F019"

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Wallet connected, change your wallet by entering Metamask 🦊",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
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
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Wallet connected, change your wallet by entering Metamask 🦊",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
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
        </span>
      ),
    };
  }
};

export const totalSupply = async () => {

  const updatedAddress = web3.utils.toChecksumAddress(
    contractAddress
  );

  window.contract = await new web3.eth.Contract(contractABI, updatedAddress);

  const totalSupply = await window.contract.methods.totalSupply().call();

  return totalSupply;
}

export const presaleMints = async (wallet) => {

  const updatedAddress = web3.utils.toChecksumAddress(
    contractAddress
  );

  window.contract = await new web3.eth.Contract(contractABI, updatedAddress);

  console.log("WALLET", wallet)

  const whitelistedTotal = await window.contract.methods.Whitelist(wallet).call();

  console.log("whitelistedTotal", whitelistedTotal)

  return whitelistedTotal;
};

export const mintNFT = async (mintAmount, address) => {

  if (!address) {
    return;
  }

  console.log("CONTRACT ABI", contractABI);

  const updatedAddress = web3.utils.toChecksumAddress(
    contractAddress
  );

  window.contract = await new web3.eth.Contract(contractABI, updatedAddress);

  console.log("window contract", window.contract);

  console.log("mint amount", mintAmount, web3.utils.toWei("0.08"));

  const value = String(mintAmount * web3.utils.toWei("0.08"));

  console.log("value", value, typeof value);

  //set up your Ethereum transaction
  const transactionParameters = {
    to: updatedAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: parseInt(web3.utils.toWei("0.08", "ether") * mintAmount).toString(
      16
    ),
    data: window.contract.methods
      .mint(mintAmount)
      .encodeABI(), //make call to NFT smart contract
  };

  //sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status: "✅ Check out your transaction on Etherscan:" + txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};
