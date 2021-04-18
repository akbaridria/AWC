import "../styles.css";
import { Loading } from "../components/Loading.js";
import React from "react";
import { Transactions } from "../components/Transactions.js";
import nodata from "../assets/img/No_data.png";
export const AllTransactions = (props) => {
  let url = `https://etherman21.herokuapp.com/transactions_csv/${props.chain_id}/${props.address}`;
  return (
    <div className="card" style={{ height: 550 }}>
      <div className="card-title">
        <div className="row">
          <div className="col s6">
            <div className="borderScoreOne">
              <label>
                <p style={{ fontSize: 20 }}>
                  <strong>Your Transactions</strong>
                </p>
              </label>
            </div>
          </div>
          <div className="col s6">
            <div className="right-align" id="downloadButtonTransaction">
              <button
                disabled={props.transactions.length === 0}
                className="btn waves-effect waves-light btn-small"
                type="submit"
                name="action"
                style={{ backgroundColor: "red" }}
              >
                <a href={url} target="_blank">
                  Download As CSV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-content">
        {(() => {
          if (props.loading)
            return (
              <center>
                <Loading />
              </center>
            );
          if (!props.loading && props.transactions.length === 0)
            return (
              <center>
                <div className="noData">
                  <img
                    alt="no data"
                    src={nodata}
                    style={{ width: 160, marginTop: 50 }}
                  />
                </div>
              </center>
            );
          if (!props.loading && props.transactions.length > 0)
            return (
              <div className="showData">
                <ul className="collapsible popout">
                  {props.transactions.map((data) => {
                    return <Transactions dataTransactions={data} />;
                  })}
                </ul>
              </div>
            );
        })()}
      </div>
    </div>
  );
};

AllTransactions.defaultProps = {
  transactions: []
};
