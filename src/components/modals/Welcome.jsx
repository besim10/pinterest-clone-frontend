function Welcome({ setModal, currentUser }) {
  return (
    <div
      onClick={() => {
        setModal("");
      }}
      className="modal-wrapper welcome"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal welcome"
      >
        <h1>Welcome, {currentUser.name}! 👌</h1>
      </div>
    </div>
  );
}
export default Welcome;
