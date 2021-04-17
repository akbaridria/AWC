import "../styles.css";

export const Modal = () => {
  return (
    <div id="modal1" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <button
          className="btn waves-effect waves-light btn-small"
          type="submit"
          name="action"
          style={{ backgroundColor: "red" }}
        >
          Download As CSV
        </button>
      </div>
    </div>
  );
};
