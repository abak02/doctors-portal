import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import firebaseConfig from "../../../firebase.config";
const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const app = initializeApp(firebaseConfig);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
        };
        setLoggedInUser(newUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center ">
      <button className="btn-brand" onClick={handleSignIn}>
        <FontAwesomeIcon style={{ marginRight: "4px" }} icon={faGoogle} />
        Log In with Google
      </button>
    </div>
  );
};

export default LoginPage;
