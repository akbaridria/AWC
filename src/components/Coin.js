import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../styles.css";
import { Modal } from "../components/Modal.js";
import M from "materialize-css/dist/js/materialize.min.js";

export const Coin = (props) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  const data = {
    labels: props.portofolio.date_converted,
    datasets: [
      {
        label: props.portofolio.contract_name,
        data: props.portofolio.data,
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
            e.target.src = require("../assets/img/token_logo.png");
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
        {/* <div className="linkModal">
          <label>
            <a
              href="#modal1"
              className="waves-effect waves-light modal-trigger"
            >
              <span className="linkColor">ERC20 Token Transfer</span>
            </a>
          </label>
        </div>
        <Modal /> */}
        <center>
          <div className="chartLineCoin">
            <Line data={data} />
          </div>
        </center>
      </div>
    </li>
  );
};
