import "./styles.css";
import { Form } from "./components/Form.js";
import React, { useEffect } from "react";
import { Download } from "./components/Download.js";
import { ListCoin } from "./components/ListCoin.js";
import { Nft } from "./components/Nft.js";
import M from "materialize-css/dist/js/materialize.min.js";

export default function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="main">
      <div className="row">
        <div className="col s7 push-s5">
          <ListCoin />
        </div>
        <div className="col s5 pull-s7">
          <Form />
          <Download />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <Nft />
        </div>
      </div>
    </div>
  );
}
