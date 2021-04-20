import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "../styles.css";
import { Modal } from "../components/Modal.js";
import M from "materialize-css/dist/js/materialize.min.js";
import defaultImg from "../assets/img/token_logo.png";
export const Coin = (props) => {
  const [tokenTransfer, setTokenTransfer] = useState([]);

  const getTransferData = async (contract) => {
    console.log(contract);
    const urlTransfer = new URL(
      `https://api.covalenthq.com/v1/${props.chain_id}/address/${props.address}/transfers_v2/`
    );
    urlTransfer.search = new URLSearchParams({
      key: "ckey_4e7ba38c8e50410a92ed0989d8f",
      "contract-address": contract
    });

    const response = await fetch(urlTransfer);
    const raw_data = await response.json();
    setTokenTransfer(raw_data.data.items);
    console.log(tokenTransfer);
  };
  useEffect(() => {
    M.AutoInit();
  }, []);
  const data = {
    labels:
      props.portofolio === undefined ? [] : props.portofolio.date_converted,
    datasets: [
      {
        label:
          props.portofolio === undefined ? "" : props.portofolio.contract_name,
        data: props.portofolio === undefined ? [] : props.portofolio.data,
        fill: false,
        borderColor: "red"
      }
    ],
    options: {
      legend: {
        display: false
      }
    }
  };
  return (
    <li>
      <div className="collapsible-header">
        <img
          className="circle"
          alt="logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImg;
          }}
          src={props.logo}
          style={{ width: 45 }}
        />{" "}
        <p>
          <span style={{ fontSize: 14, marginLeft: 20 }}>
            <strong>{props.ticker}</strong>
          </span>
          <br />
          <span style={{ marginLeft: 20, fontSize: 12 }}>
            {props.currency +
              " " +
              Number(parseFloat(props.quote).toFixed(2)).toLocaleString()}
          </span>
        </p>
      </div>

      <div className="collapsible-body">
        {props.supportErc !== null ? (
          <>
            <div className="linkModal">
              <label>
                <a
                  onClick={() => {
                    getTransferData(props.contractAddress);
                  }}
                  href={"#modal" + props.contractAddress}
                  className="waves-effect waves-light modal-trigger"
                >
                  <span className="linkColor">ERC20 Token Transfer</span>
                </a>
              </label>
            </div>
            <Modal
              contractAddress={props.contractAddress}
              tokenTransfer={tokenTransfer}
              chain_id={props.chain_id}
              address={props.address}
            />
          </>
        ) : (
          <></>
        )}

        <center>
          <div className="chartLineCoin">
            <Line data={data} />
          </div>
        </center>
      </div>
    </li>
  );
};

Coin.defaultProps = {
  supportErc: []
};
