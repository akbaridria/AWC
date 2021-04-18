import { NFTPiece } from "../components/NftPiece.js";
import "../styles.css";
import React from "react";
import { Loading } from "../components/Loading.js";
import nodata from "../assets/img/No_data.png";
export const Nft = (props) => {
  return (
    <div className="card" style={{ height: 550 }}>
      <span className="card-title">
        <div className="borderScoreOne">
          <label>
            <a
              className="tooltipped"
              style={{ fontSize: 20 }}
              data-position="right"
              data-tooltip="Swipe left or right to see more!"
              id="tooltip"
            >
              <strong>Your NFTs</strong>
            </a>
          </label>
        </div>
      </span>

      <div className="card-content">
        {(() => {
          if (props.loading)
            return (
              <center>
                <Loading />
              </center>
            );
          if (!props.loading && props.nft.length === 0)
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
          if (!props.loading && props.nft.length > 0)
            return (
              <div className="carousel carousel-slider">
                {props.nft.map((nfts) => {
                  let contract_name = nfts.contract_name;
                  return nfts.nft_data.map((data) => {
                    return (
                      <NFTPiece
                        contract_name={contract_name}
                        token_id={data.token_id}
                        image={data.external_data.image}
                        name={data.external_data.name}
                        description={data.external_data.description}
                        external_url={data.external_data.external_url}
                      />
                    );
                  });
                })}
              </div>
            );
        })()}
      </div>
    </div>
  );
};

Nft.defaultProps = {
  nft: []
};
