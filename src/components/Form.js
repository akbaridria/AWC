import "../styles.css";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import logo from "../assets/img/avax_logo.png";

export const Form = (props) => {
  const [address, setAddress] = useState("");
  const Web3 = require("web3");
  const [ethExist, setEthExist] = useState(false);
  const [currency, setCurrency] = useState("usd");

  const getData = () => {
    console.log(currency);
    let chain_id = 43114;
    // let url = `https://api.covalenthq.com/v1/${chain_id}/address/${address}/balances_v2`;
    let url = `https://etherman21.herokuapp.com/get_all/${chain_id}/${address}?currency=${currency}`;
    props.sendData(url, chain_id, address);
  };
  const disconnectAccount = () => {
    setAddress("");
    setEthExist(false);
    return true;
  };
  const getAccount = async () => {
    try {
      if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        await window.ethereum.enable();

        await window.web3.eth.getAccounts().then((e) => {
          setEthExist(true);

          setAddress(e[0].toString());
        });

        return true;
      }
      return false;
    } catch (e) {
      Swal.fire("Error", "Something went wrong..", "error");
    }
  };
  return (
    <div className="card" style={{ height: 500 }}>
      <div className="card-content">
        <center>
          <img alt="Avax Logo" src={logo} style={{ width: 150 }} />
          <h5>
            <strong>Avalanche Wallet Checker</strong>
          </h5>
          <span>Powered By </span>
          <div className="row">
            <div className="col s10">
              <div className="input-field ">
                <input
                  id="wallet"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {address === "" ? (
                  <label htmlFor="wallet">Wallet Address</label>
                ) : (
                  <label htmlFor="wallet" className="active">
                    Wallet Address
                  </label>
                )}

                <span class="helper-text" style={{ textAlign: "left" }}>
                  Ex : 0x1f351B1cAf0B7037353cd284a6a225CECCE5677b
                </span>
              </div>
            </div>
            <div className="col s2">
              <button
                onClick={getData}
                className="btn waves-effect waves-light btn-small"
                type="submit"
                id="action"
                style={{ backgroundColor: "red" }}
              >
                <i className="material-icons">search</i>
              </button>
            </div>
          </div>

          <label>Or</label>
          <br></br>
          <br></br>
          {ethExist === true ? (
            <button
              onClick={disconnectAccount}
              className="btn waves-effect waves-light btn-small"
              type="submit"
              name="action"
              style={{ backgroundColor: "black" }}
            >
              Disconnect Wallet
              <i className="material-icons right">highlight_off</i>
            </button>
          ) : (
            <button
              onClick={getAccount}
              className="btn waves-effect waves-light btn-small"
              type="submit"
              name="action"
              style={{ backgroundColor: "red" }}
            >
              Connect Wallet
              <i className="material-icons right">send</i>
            </button>
          )}
          <br></br>
          <br></br>
          <p>Change Currency</p>
          <hr style={{ width: 120 }} />
          <label style={{ marginRight: 20 }}>
            <input
              value="usd"
              className="with-gap"
              name="group1"
              type="radio"
              checked={currency === "usd"}
              onChange={(e) => setCurrency(e.target.value)}
            />
            <span>USD</span>
          </label>
          <label style={{ marginRight: 20 }}>
            <input
              value="eur"
              className="with-gap"
              name="group1"
              type="radio"
              checked={currency === "eur"}
              onChange={(e) => setCurrency(e.target.value)}
            />
            <span>EUR</span>
          </label>
          <label>
            <input
              value="jpy"
              className="with-gap"
              name="group1"
              type="radio"
              checked={currency === "jpy"}
              onChange={(e) => setCurrency(e.target.value)}
            />
            <span>JPN</span>
          </label>
        </center>
      </div>
    </div>
  );
};
