import "../styles.css";
import React from "react";

export const NFTPiece = (props) => {
  return (
    <center>
      <div className="carousel-item">
        <div class="card" style={{ width: 350, height: 380 }}>
          <div class="card-image" id="nftPadding">
            <center>
              <img alt="nft" src={props.image} id="photo" />
            </center>
          </div>
          <center></center>
          <div class="card-content">
            <div className="left">
              <div className="borderScoreNft">
                <label>
                  <p style={{ fontSize: 12 }}>
                    <strong>Contract Name</strong>
                  </p>
                  <strong>
                    <p style={{ color: "red", fontSize: 10 }}>
                      <strong>{props.contract_name}</strong>
                    </p>
                  </strong>
                </label>
              </div>
              <div className="borderScoreNft">
                <label>
                  <p style={{ fontSize: 12 }}>
                    <strong>Token ID</strong>
                  </p>
                  <strong>
                    <p style={{ color: "red", fontSize: 10 }}>
                      <strong>{props.token_id}</strong>
                    </p>
                  </strong>
                </label>
              </div>
              <div className="borderScoreNft">
                <label>
                  <p style={{ fontSize: 12 }}>
                    <strong>Name</strong>
                  </p>
                  <strong>
                    <p style={{ color: "red", fontSize: 10 }}>
                      <strong>{props.name}</strong>
                    </p>
                  </strong>
                </label>
              </div>
              <div className="borderScoreNft">
                <label>
                  <p style={{ fontSize: 12 }}>
                    <strong>Description</strong>
                  </p>
                  <strong>
                    <p style={{ color: "red", fontSize: 10 }}>
                      <strong>{props.description}</strong>
                    </p>
                  </strong>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};
