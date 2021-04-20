import "../styles.css";
import React, { useState, useEffect } from "react";
import { ErcTransfer } from "../components/ErcTransfer.js";
import M from "materialize-css/dist/js/materialize.min.js";
export const Modal = (props) => {
  const url = `https://etherman21.herokuapp.com/erc_csv/${props.chain_id}/${props.address}/${props.contractAddress}`;
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div id={"modal" + props.contractAddress} class="modal modal-fixed-footer">
      <div class="modal-content">
        <div className="borderScore">
          <label>ERC20 Token Transfer</label>
        </div>
        {props.tokenTransfer.map((data) => {
          return data.transfers.map((raw) => {
            return (
              <ul className="collapsible popout">
                <ErcTransfer raw={raw} />
              </ul>
            );
          });
        })}
      </div>
      <div class="modal-footer">
        <button
          className="btn waves-effect waves-light btn-small"
          type="submit"
          name="action"
          style={{ backgroundColor: "red" }}
        >
          <a href={url} target="_blank">
            Download as CSV
          </a>
        </button>
      </div>
    </div>
  );
};
