import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import CreatedPins from "./CreatedPins";
import SavedPins from "./SavedPins";

function Profile({ currentUser }) {
  const [createdPins, setCreatedPins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) navigate("/");
  }, [currentUser, navigate]);

  if (currentUser === null) return <h1>User not signed in...</h1>;

  useEffect(() => {
    fetch(`${API_URL}/pins`)
      .then((resp) => resp.json())
      .then((pinsFromServer) => {
        let copyOfPinsFromServer = pinsFromServer;
        copyOfPinsFromServer = copyOfPinsFromServer.filter(
          (pin) => pin.userId === currentUser.id
        );
        setCreatedPins(copyOfPinsFromServer);
      });
  }, []);
  return (
    <div>
      <div className="profile-main">
        <img
          className="profile-main__photo"
          src={`https://i.pravatar.cc/150?img=${currentUser.id}`}
        />
        <h1 className="profile-main__title">{`${currentUser.name} ${currentUser.surname}`}</h1>
        <span>{`@${currentUser.name}${currentUser.surname}`}</span>
        <div className="action-bar">
          <NavLink to="/profile/created">
            <button>Created</button>
          </NavLink>
          <NavLink to="/profile/saved">
            <button>Saved</button>
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route
          path="/created"
          element={<CreatedPins createdPins={createdPins} />}
        />
        <Route
          path="/saved"
          element={<SavedPins currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}
export default Profile;
