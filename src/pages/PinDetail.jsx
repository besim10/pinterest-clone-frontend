import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../config";

function PinDetail({ pins, setPins, currentUser, setCurrentUser, setModal }) {
  const params = useParams();
  const [pin, setPin] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API_URL}/pins/${params.id}?_expand=user`)
      .then((resp) => resp.json())
      .then((pinFromServer) => setPin(pinFromServer));
  }, []);
  // console.log(pin.userId);
  // console.log(currentUser.id);
  function checkIfIsTheSamePin() {
    const match = currentUser.saved.find((obj) => obj.pinId === pin.id);
    return match;
  }

  const checkIfThePinBelongsUser = () => {
    if (currentUser !== null && pin !== null) {
      return currentUser.id === pin.userId;
    }
  };
  const deletePinFromServer = () => {
    fetch(`${API_URL}/pins/${pin.id}`, {
      method: "DELETE",
    }).then(() => {
      let updatedPins = [...pins];
      updatedPins = updatedPins.filter((singlePin) => singlePin.id !== pin.id);
      setPins(updatedPins);
      navigate("/profile/created");
    });
  };
  const addSavedPinToServer = () => {
    if (currentUser === null) {
      setModal("cannot-save");

      setTimeout(() => {
        setModal("log-in");
      }, 1200);
      return;
    } else {
      let result = checkIfIsTheSamePin();

      if (result) {
        setModal("cannot-save-twice");
        setTimeout(() => {
          setModal("");
        }, 1500);
        return;
      }
    }
    if (pin === null) return;
    fetch(`${API_URL}/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        saved: [...currentUser.saved, { pinId: pin.id }],
      }),
    })
      .then((resp) => resp.json())
      .then(() => {
        let copyOfCurrentUser = JSON.parse(JSON.stringify(currentUser));
        copyOfCurrentUser.saved = [
          ...copyOfCurrentUser.saved,
          { pinId: pin.id },
        ];
        setCurrentUser(copyOfCurrentUser);
        setTimeout(() => {
          navigate("/profile");
        }, 500);
      });
  };
  if (pin === null) return <h1>Loading...</h1>;

  return (
    <div className="pin-detail-wrapper">
      <div className="pin-detail-container">
        <div className="pin-detail__image">
          <img src={pin.imgSrc} alt={pin.name} />
        </div>
        <div className="pin-detail__descriptions">
          <div className="pin-detail__descriptions__buttons">
            {checkIfThePinBelongsUser() ? (
              <button onClick={deletePinFromServer} className="button delete">
                Delete
              </button>
            ) : null}
            <button onClick={addSavedPinToServer} className="button save">
              SAVE
            </button>
          </div>

          <h4>
            <span className="pin-detail__description__uploaded">
              Uploaded by:
            </span>{" "}
            {pin.user.name} {pin.user.surname}
          </h4>
          <h3>{pin.title}</h3>
          <p>{pin.content}</p>
        </div>
      </div>
    </div>
  );
}
export default PinDetail;
