import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

function PinBuilder({ pins, setPins, currentUser }) {
  const navigate = useNavigate();
  function addPinToServer(newPin) {
    fetch(`${API_URL}/pins`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPin),
    })
      .then((resp) => resp.json())
      .then((pinFromServer) => {
        let copyOfPins = JSON.parse(JSON.stringify(pins));
        setPins([pinFromServer, ...copyOfPins]);
        setTimeout(function () {
          navigate("/pins");
        }, 100);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const imgSrc = e.target.url.value;
    const title = e.target.title.value;
    const userId = currentUser.id;
    const content = e.target.content.value;
    const newPin = {
      imgSrc: imgSrc,
      title: title,
      userId: userId,
      content: content,
    };

    addPinToServer(newPin);
  };
  return (
    <div className="pin-builder-wrapper">
      <div className="pin-builder-content">
        <form onSubmit={handleSubmit}>
          <button className="button post" type="submit">
            POST
          </button>
          <input
            type="text"
            name="url"
            placeholder="Your image URL:"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Add your title"
            required
          />
          <textarea
            name="content"
            cols={40}
            rows={10}
            placeholder="Tell everyone what your pin is about 😀"
          />
        </form>
      </div>
    </div>
  );
}
export default PinBuilder;
