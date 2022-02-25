import { Link } from "react-router-dom";

function SavedPins({ savedPins }) {
  return (
    <ul className="saved-list">
      {savedPins.length !== 0 ? (
        savedPins.map((pin) => (
          <Link to={`/pins/${pin.id}`} key={pin.id}>
            <li className="saved-list__item">
              <img src={pin.imgSrc} alt="" />
              <div className="overlay"></div>
            </li>
          </Link>
        ))
      ) : (
        <h2>Not any saved pins yet!</h2>
      )}
    </ul>
  );
}
export default SavedPins;
