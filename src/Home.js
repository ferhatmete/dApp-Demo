import React from "react";
import "./Home.css";

const Home = ({
  errorMessage,
  defaultAccount,
  userBalance,
  connectButtonText,
  connectWalletHandler,
}) => {
  return (
    <div className="walletCard">
      <h1>Connection to MetaMask</h1>
      <button onClick={connectWalletHandler}>{connectButtonText}</button>
      <div className="accountDisplay">
        <h3>Address: {defaultAccount}</h3>
        <h3>Balance: {userBalance}</h3>
      </div>
      {errorMessage}
    </div>
  );
};

export default Home;
