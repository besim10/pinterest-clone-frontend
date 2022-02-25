import { Link } from "react-router-dom";

function CreatedPins({ createdPins }) {
  return (
    <ul className="created-list">
      {createdPins.map((pin) => (
        <Link key={pin.id} to={`/pins/${pin.id}`}>
          <li className="created-list__item">
            <img src={pin.imgSrc} alt="" />
            <div className="overlay"></div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
export default CreatedPins;
