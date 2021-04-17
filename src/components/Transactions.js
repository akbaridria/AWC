import React from "react";
import "../styles.css";
export const Transactions = (props) => {
  return (
    <li>
      <div className="collapsible-header">
        <i className="material-icons">check_circle_outline</i>
        <p style={{ fontSize: 10 }}>
          {props.dataTransactions.tx_hash}
          <br /> <span>{props.dataTransactions.block_signet_at}</span>
        </p>
      </div>

      <div className="collapsible-body">
        <div className="borderScore">
          <label>
            <p style={{ fontSize: 12 }}>
              <strong>From Address</strong>
            </p>
            <strong>
              <p style={{ color: "red", fontSize: 10 }}>
                <strong>{props.dataTransactions.from_address}</strong>
              </p>
            </strong>
          </label>
        </div>
        <div className="borderScore">
          <label>
            <p style={{ fontSize: 12 }}>
              <strong>To Address</strong>
            </p>
            <strong>
              <p style={{ color: "red", fontSize: 10 }}>
                <strong>{props.dataTransactions.to_address}</strong>
              </p>
            </strong>
          </label>
        </div>
        <div className="borderScore">
          <label>
            <strong>
              <a href={"https://cchain.explorer.avax.network/tx/" + props.dataTransactions.tx_hash} target="_blank" className="viewExplore">
                View in Explorer
              </a>
            </strong>
          </label>
        </div>
      </div>
    </li>
  );
};
