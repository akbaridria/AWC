import "../styles.css";

export const Form = () => {
  return (
    <div className="card" style={{ height: 400 }}>
      <div className="card-content">
        <center>
          <img
            alt="Avax Logo"
            src={require("../assets/img/avax_logo.png")}
            style={{ width: 150 }}
          />
          <h5>
            <strong>Avalanche Wallet Checker</strong>
          </h5>
          <span>Powered By </span>
          <div className="input-field ">
            <input id="wallet" type="email" className="validate" />
            <label htmlFor="wallet">Wallet Address</label>
          </div>
        </center>
      </div>
    </div>
  );
};
