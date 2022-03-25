import React, { useState } from "react";
import { ethers } from "ethers";
import "./ProfilePage.css";

const ProfilePage = ({
  defaultAccount,
  connectWalletHandler,
  accountChangedHandler,
  getAddress,
  getUserName,
}) => {
  return (
    <div className="profile">
      <div className="profile__header">
        <h2>Profile</h2>
      </div>
      <div className="profile__body">
        <p>Wallet Address: {defaultAccount}</p>
        <div className="profile__form">
          <form onSubmit={connectWalletHandler} className="form">
            <div className="form__options">
              <label htmlFor="Username">Username</label>
              <input onChange={getUserName} type="text"></input>
            </div>
            <div className="form__options">
              <label htmlFor="Address">Wallet Address</label>
              <input onChange={getAddress} type="text"></input>
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
