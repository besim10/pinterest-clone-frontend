import CannotSaveMessage from "./CannotSaveMessage";
import CannotSaveTwice from "./CannotSaveTwice";
import Create from "./Create";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import UserAlreadyExists from "./UserAlreadyExists";
import UserNotExists from "./UserNotExists";
import Welcome from "./Welcome";
function Modals({ modal, setModal, currentUser, setCurrentUser }) {
  switch (modal) {
    case "log-in":
      return <LogIn setModal={setModal} setCurrentUser={setCurrentUser} />;
    case "sign-up":
      return <SignUp setModal={setModal} setCurrentUser={setCurrentUser} />;
    case "create":
      return <Create setModal={setModal} />;
    case "user-not-exists":
      return <UserNotExists setModal={setModal} />;
    case "user-already-exists":
      return <UserAlreadyExists setModal={setModal} />;
    case "welcome":
      return <Welcome currentUser={currentUser} setModal={setModal} />;
    case "cannot-save":
      return <CannotSaveMessage setModal={setModal} />;
    case "cannot-save-twice":
      return <CannotSaveTwice setModal={setModal} />;
    default:
      return null;
  }
}
export default Modals;
