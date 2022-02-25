import { Link } from "react-router-dom";
import create from "../../icons/Create.svg";
function Create({ setModal }) {
  return (
    <div
      onClick={() => {
        setModal("");
      }}
      className="modal-wrapper create"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal create"
      >
        <Link to="/pin-builder">
          <button
            onClick={() => {
              setModal("");
            }}
            className="modal-create__button"
          >
            <img src={create} alt="" />
            <span>Create a pin</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Create;
