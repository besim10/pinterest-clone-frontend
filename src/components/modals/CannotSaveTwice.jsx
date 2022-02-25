function CannotSaveTwice({ setModal }) {
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
        <h2>Common you can't save it twice..🤷‍♂️</h2>
      </div>
    </div>
  );
}
export default CannotSaveTwice;
