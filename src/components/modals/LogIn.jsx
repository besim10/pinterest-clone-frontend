import logo from "../../icons/Pinterest-logo.svg";
import close from "../../icons/Close.svg";
import { API_URL } from "../../../config";
function LogIn({ setModal, setCurrentUser }) {
  function getUserFromServer(email, password) {
    fetch(`${API_URL}/users`)
      .then((resp) => resp.json())
      .then((usersFromServer) => {
        let users = usersFromServer;
        let user = users.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          if (user.password === password) {
            setCurrentUser(user);
            setModal("welcome");
            setTimeout(function () {
              setModal("");
            }, 1500);
            // console.log("Logging in!");
          }
          // else {
          //   console.log("Wrong password");
          // }
        } else {
          setModal("user-not-exists");
          // console.log("User doesn't exist");
          setTimeout(function () {
            setModal("log-in");
          }, 1500);
        }
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    getUserFromServer(email, password);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button
          onClick={() => {
            setModal("");
          }}
          className="close-modal"
        >
          <img src={close} alt="" />
        </button>
        <span className="logo">
          <img src={logo} alt="Pinterest Logo" />
        </span>
        <h1>Welcome to Pinterest</h1>
        <div className="modal-details">
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button className="button submit" type="submit">
              Log in
            </button>
          </form>
          <p>
            By continuing, you agree to Pinterest's{" "}
            <strong>Terms of Service</strong> and acknowledge you've read our{" "}
            <strong>Privacy Policy</strong>
          </p>
          <span
            onClick={() => {
              setModal("sign-up");
            }}
            className="modal-details__check"
          >
            Not on Pinterest yet? Sign up
          </span>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
