import React from "react";
import "./WalletAddress.css";

const WalletAddress = ({ defaultAccount, userBalance }) => {
  return (
    <div className="tokenPage">
      <h2>Cryptos</h2>
      <div className="tokenPage__account">
        <div className="account">
          <h4>Account: {defaultAccount}</h4>
          <h4>Balance: {userBalance}</h4>
        </div>
      </div>
      <div className="token__options">
        <h4>Crypto Currencies</h4>
        <div className="tokens">
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="https://www.cryptocompare.com/media/19633/btc.png"
                  alt="bitcoin"
                />
                <div className="token__name token-margin">
                  <h4>Bitcoin</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$44,545</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="	https://www.cryptocompare.com/media/37746238/eth.png"
                  alt="ethereum"
                />
                <div className="token__name token-margin">
                  <h4>Ethereum</h4>
                </div>
              </div>

              <div className="token__price token-margin">
                <h4>$3,125</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="https://www.cryptocompare.com/media/37746235/ada.png"
                  alt="cardano"
                />
                <div className="token__name token-margin">
                  <h4>Cardano</h4>
                </div>
              </div>

              <div className="token__price token-margin">
                <h4>$1.126</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="	https://www.cryptocompare.com/media/37746880/bnb.png"
                  alt="binance coin"
                />
                <div className="token__name token-margin">
                  <h4>Binance Coin</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$414.65</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="	https://www.cryptocompare.com/media/37746338/usdt.png"
                  alt="tetherusd"
                />
                <div className="token__name token-margin">
                  <h4>Tether</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$1.000</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="https://www.cryptocompare.com/media/37746339/doge.png"
                  alt="dogecoin"
                />
                <div className="token__name token-margin">
                  <h4>Dogecoin</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$0.1334</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="https://www.cryptocompare.com/media/37747540/chz.png"
                  alt="chiliz"
                />
                <div className="token__name token-margin">
                  <h4>Chiliz</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$0.2406</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="https://www.cryptocompare.com/media/38553120/algo.png"
                  alt="algorand"
                />
                <div className="token__name token-margin">
                  <h4>Algorand</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$0.9116</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="https://www.cryptocompare.com/media/37746665/mana.png"
                  alt="decentraland"
                />
                <div className="token__name token-margin">
                  <h4>Decentraland</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$2.606</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="https://www.cryptocompare.com/media/37746879/trx.png"
                  alt="tron"
                />
                <div className="token__name token-margin">
                  <h4>Tron</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$0.06445</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="https://www.cryptocompare.com/media/37746885/uni.png"
                  alt="uniswap"
                />
                <div className="token__name token-margin">
                  <h4>Uniswap</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$10.67</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
          <div className="token">
            <div className="token__desc">
              <div className="token__img token-margin">
                <img
                  src="https://www.cryptocompare.com/media/37747959/kda.png"
                  alt="kadena"
                />
                <div className="token__name token-margin">
                  <h4>Kadena</h4>
                </div>
              </div>
              <div className="token__price token-margin">
                <h4>$6.843</h4>
              </div>
            </div>
            <div className="token__buy">
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletAddress;
