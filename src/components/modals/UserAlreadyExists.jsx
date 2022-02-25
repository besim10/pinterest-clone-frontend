function UserAlreadyExists({ setModal }) {
  return (
    <div
      onClick={() => {
        setModal("");
      }}
      className="modal-wrapper user-already-exists"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal user-already-exists"
      >
        <h1>User already exists...</h1>
        <span>Please try again!</span>
      </div>
    </div>
  );
}
export default UserAlreadyExists;
