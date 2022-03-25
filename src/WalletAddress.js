import React from "react";
import "./WalletAddress.css";

const WalletAddress = ({ defaultAccount, userBalance }) => {
  return (
    <div className="tokenPage">
      <h2>Token Page</h2>
      <div className="tokenPage__account">
        <h4>Account: {defaultAccount}</h4>
        <h4>Balance: {userBalance}</h4>
      </div>
    </div>
  );
};

export default WalletAddress;
