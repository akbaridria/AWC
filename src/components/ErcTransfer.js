import "../styles.css";

import React, { useEffect } from "react";

export const ErcTransfer = (props) => {
  return (
    <li>
      <div className="collapsible-header">
        {props.raw.transfer_type === "IN" ? (
          <i className="material-icons">call_received</i>
        ) : (
          <i className="material-icons">call_made</i>
        )}

        <p style={{ fontSize: 10 }}>
          {props.raw.tx_hash}
          <br /> <span>{props.raw.block_signed_at}</span>
        </p>
      </div>
      <div className="bodyCollaps">
        <div className="borderScore">
          <label>
            <p style={{ fontSize: 12 }}>
              <strong>From Address</strong>
            </p>
            <strong>
              <p style={{ color: "red", fontSize: 10 }}>
                <strong>{props.raw.from_address}</strong>
              </p>
            </strong>
          </label>

          <label>
            <p style={{ fontSize: 12 }}>
              <strong>To Address</strong>
            </p>
            <strong>
              <p style={{ color: "red", fontSize: 10 }}>
                <strong>{props.raw.to_address}</strong>
              </p>
            </strong>
          </label>

          <label>
            <p style={{ fontSize: 12 }}>
              <strong>Total</strong>
            </p>
            <strong>
              <p style={{ color: "red", fontSize: 10 }}>
                <strong>
                  {props.raw.delta / Math.pow(10, props.raw.contract_decimals)}
                </strong>
              </p>
            </strong>
          </label>
        </div>
      </div>
    </li>
  );
};
