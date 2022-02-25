function CannotSaveMessage({ setModal }) {
  return (
    <div
      onClick={() => {
        setModal("");
      }}
      className="modal-wrapper cannot-save-message"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal cannot-save-message"
      >
        <h1>First, log in please!😬</h1>
      </div>
    </div>
  );
}
export default CannotSaveMessage;
