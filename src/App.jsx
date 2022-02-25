import { useEffect, useState } from "react";
import Header from "./components/header";
import { Navigate, Route, Routes } from "react-router-dom";
import Pins from "./Pages/Pins";
import "./index.css";
import PinDetail from "./pages/PinDetail";
import Modals from "./components/modals/Modals";
import create from "./icons/Create.svg";
import Profile from "./pages/Profile";
import PinBuilder from "./pages/PinBuilder";
import { API_URL } from "../config";
function App() {
  const [pins, setPins] = useState([]);
  const [modal, setModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/pins`)
      .then((resp) => resp.json())
      .then((pinsFromServer) => {
        setPins(pinsFromServer.reverse());
      });
  }, []);
  return (
    <div className="App">
      <Header
        setModal={setModal}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setSearch={setSearch}
      />
      <main>
        {currentUser !== null ? (
          <button
            onClick={() => {
              setModal("create");
            }}
            className="create-pin__button-on-page"
          >
            <img src={create} alt="" />
          </button>
        ) : null}

        <Routes>
          <Route index element={<Navigate to="/pins" />} />
          <Route path="/pins" element={<Pins pins={pins} search={search} />} />
          <Route
            path="/pins/:id"
            element={
              <PinDetail
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setModal={setModal}
                pins={pins}
                setPins={setPins}
              />
            }
          />
          <Route
            path="/pin-builder"
            element={
              <PinBuilder
                pins={pins}
                setPins={setPins}
                currentUser={currentUser}
              />
            }
          />

          <Route
            path="/profile/*"
            element={<Profile currentUser={currentUser} />}
          />
        </Routes>
        <Modals
          modal={modal}
          setModal={setModal}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </main>
    </div>
  );
}

export default App;
