function UserNotExists({ setModal }) {
  return (
    <div
      onClick={() => {
        setModal("");
      }}
      className="modal-wrapper user-not-exists"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal  user-not-exists"
      >
        <h1>User not exists!</h1>
        <span>Please try again!</span>
      </div>
    </div>
  );
}
export default UserNotExists;
