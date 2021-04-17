export const Download = () => {
  return (
    <div className="card">
      <div className="card-content">
        <button
          className="btn waves-effect waves-light btn-small"
          type="submit"
          name="action"
          style={{ backgroundColor: "red" }}
        >
          Download as
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};
