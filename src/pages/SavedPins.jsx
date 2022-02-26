import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
function SavedPins({ currentUser }) {
  const [allPins, setAllPins] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/pins`)
      .then((resp) => resp.json())
      .then((pinsFromServer) => {
        setAllPins(pinsFromServer);
      });
  }, []);
  const savedPins = currentUser.saved.map((sav) =>
    allPins.find((pin) => sav.pinId === pin.id)
  );

  if (allPins.length === 0) return <h1>Loading...</h1>;
  return (
    <ul className="saved-list">
      {savedPins.map((pin) => (
        <Link to={`/pins/${pin.id}`} key={pin.id}>
          <li className="saved-list__item">
            <img src={pin.imgSrc} alt="" />
            <div className="overlay"></div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
export default SavedPins;
