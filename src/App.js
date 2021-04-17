import "./styles.css";
import { Form } from "./components/Form.js";
import React, { useEffect, useState } from "react";
import { ListCoin } from "./components/ListCoin.js";
import { Nft } from "./components/Nft.js";
import M from "materialize-css/dist/js/materialize.min.js";
import { AllTransactions } from "./components/AllTransactions.js";
export default function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [allData, setAllData] = useState({});
  const [loading, setLoading] = useState(false);
  const [chainId, setChainId] = useState(1);
  const [address, setAddress] = useState("");

  const getData = async (url, chain_id, address) => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setAllData(data);
    setLoading(false);
    setChainId(chain_id);
    setAddress(address);
  };

  return (
    <div className="main">
      <div className="row">
        <div className="col s7 push-s5">
          <ListCoin
            allBalance={allData.all_balance}
            balance={allData.balance}
            portofolio={allData.portfolio}
            loading={loading}
            currency={allData.currency}
            chainID={chainId}
            address={address}
          />
        </div>
        <div className="col s5 pull-s7">
          <Form sendData={getData} />
        </div>
      </div>
      <div className="row">
        <div className="col s6 push-s6">
          <Nft loading={loading} nft={allData.nft} />
        </div>
        <div className="col s6 pull-s6">
          <AllTransactions
            transactions={allData.transactions}
            loading={loading}
            chain_id={chainId}
            address={address}
          />
        </div>
      </div>
    </div>
  );
}
