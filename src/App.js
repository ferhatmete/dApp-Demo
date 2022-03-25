import "./App.css";
import React, { useState } from "react";
import { ethers } from "ethers";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import WalletAddress from "./WalletAddress";
import ProfilePage from "./ProfilePage";
import Home from "./Home";

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connectButtonText, setConnectButtonText] = useState("Connect Wallet");
  const [userName, setUserName] = useState();
  const [address, setAddress] = useState();

  /* Connect Metamask */

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
      setConnectButtonText("Connected");
      if (userBalance < 0.01) {
        /* Routing Pages */

        setErrorMessage(
          <div className="walletPage">
            <h4>
              You don't have enough balance to buy tokens! Go to Token Page
            </h4>
            <Link to="/walletAddress">Token Page</Link>
          </div>
        );
      } else {
        setErrorMessage(
          <div className="profilePage">
            <h4>
              You have a enough balance to buy tokens. Go to Profile Page and
              setup your profile!
            </h4>
            <Link to="/profilePage">Profile Page</Link>
          </div>
        );
      }
    } else {
      setErrorMessage("Please Install MetaMask!");
    }
  };

  /* Account Change Handler */

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };

  /* Get User Balance */

  const getUserBalance = async (address) => {
    await window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  /* Chain Change Handler */

  const chainChangedHandler = () => {
    window.location.reload();
  };

  /* Get UserName  */
  const getUserName = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };

  /* Get Address */

  const getAddress = (e) => {
    setAddress(e.target.value);
    console.log(address);
  };

  window.ethereum.on("accountsChanged", accountChangedHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                errorMessage={errorMessage}
                defaultAccount={defaultAccount}
                userBalance={userBalance}
                connectButtonText={connectButtonText}
                connectWalletHandler={connectWalletHandler}
              />
            }
          />
          <Route
            path="/walletAddress"
            element={
              <WalletAddress
                defaultAccount={defaultAccount}
                userBalance={userBalance}
                connectWalletHandler={connectWalletHandler}
              />
            }
          />
          <Route
            path="/profilePage"
            element={
              <ProfilePage
                defaultAccount={defaultAccount}
                accountChangedHandler={accountChangedHandler}
                getUserName={getUserName}
                getAddress={getAddress}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
