import { Link, useNavigate } from "react-router-dom";
import logo from "../icons/Pinterest-logo.svg";
import searchIcon from "../icons/Search.svg";

function Header({ setModal, currentUser, setCurrentUser, setSearch }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link to="/pins">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="home">
        <Link to="/pins">
          <span>Home</span>
        </Link>
      </div>
      <div className="search desktop">
        <span>
          <img className="search-icon" src={searchIcon} alt="" />
        </span>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="search"
          placeholder="Search"
        />
      </div>
      {currentUser === null ? (
        <div className="header-buttons">
          <button
            onClick={() => {
              setModal("log-in");
            }}
            className="button log-in"
          >
            Log in
          </button>
          <button
            onClick={() => {
              setModal("sign-up");
            }}
            className=" button sign up"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="profile-button__container">
          <button
            onClick={() => {
              setCurrentUser(null);
              navigate("/");
            }}
            className="button log-out"
          >
            Log out
          </button>
          <Link to="/profile/created">
            <button className="button profile">
              {currentUser !== null ? (
                <img
                  src={`https://i.pravatar.cc/150?img=${currentUser.id}`}
                  alt=""
                />
              ) : null}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Header;
