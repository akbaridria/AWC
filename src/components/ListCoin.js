import "../styles.css";
import React, { useEffect } from "react";
import { Coin } from "../components/Coin.js";
import { Loading } from "../components/Loading.js";
import nodata from "../assets/img/No_data.png";

import M from "materialize-css/dist/js/materialize.min.js";

export const ListCoin = (props) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  let url = `https://etherman21.herokuapp.com/balance_csv/${props.chainID}/${props.address}`;

  let count = -1;
  return (
    <div className="card" style={{ height: 500 }}>
      <div className="card-content">
        <div className="row">
          <div className="col s6">
            <div className="borderScore">
              <label>
                <p style={{ fontSize: 20 }}>
                  <strong>Available Balance</strong>
                </p>
                <strong>
                  <p style={{ color: "red", fontSize: 14 }}>
                    <strong>
                      {props.currency +
                        " " +
                        Number(
                          parseFloat(props.allBalance).toFixed(2)
                        ).toLocaleString()}
                    </strong>
                  </p>
                </strong>
              </label>
            </div>
          </div>
          <div className="col s6">
            <div className="right-align">
              <button
                disabled={props.balance.length === 0}
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
        {(() => {
          if (props.loading)
            return (
              <center>
                <Loading />
              </center>
            );
          if (!props.loading && props.balance.length === 0)
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
          if (!props.loading && props.balance.length > 0)
            return (
              <div className="showData">
                <ul className="collapsible popout">
                  {props.balance.map((data) => {
                    count = count + 1;
                    return (
                      <Coin
                        logo={data.logo_url}
                        ticker={data.contract_name}
                        balanceCoin={data.balance_converted}
                        quote={data.quote}
                        currency={props.currency}
                        portofolio={props.portofolio[count]}
                      />
                    );
                  })}
                </ul>
              </div>
            );
        })()}
      </div>
    </div>
  );
};

ListCoin.defaultProps = {
  balance: [],
  allBalance: "0.000",
  currency: "$",
  chainID: "",
  address: ""
};
