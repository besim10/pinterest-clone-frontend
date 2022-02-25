import { Link } from "react-router-dom";

function Pins({ pins, search }) {
  const pinsToShow = () => {
    let updatesPins = pins;
    updatesPins = updatesPins.filter((pin) =>
      pin.title.toUpperCase().includes(search.toUpperCase())
    );
    return updatesPins;
  };
  return (
    <div className="pins-container">
      {pinsToShow().map((pin, index) => (
        <Link key={index} to={`/pins/${pin.id}`}>
          <div className="pin">
            <img src={pin.imgSrc} />
            <div className="overlay"></div>
            <span>{pin.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Pins;
