import { Fragment, useEffect, useState, useContext } from "react";
import "../login/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { allData } from "../../context/Context";

function Login() {
  const [agent, setAgent] = useState({});
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isExist, setIsExist] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    setCurrentUser,
    setIsSignedIn,
    currentUser,
    setCurrentCart,
    currentCart,
  } = useContext(allData);
  const navigate = useNavigate();
  // get info from the server
  const serverUrl = "http://localhost:5001/users";
  const getAllUserData = () => {
    axios.get(serverUrl).then((users) => {
      setUsers(users.data);
    });
  };
  useEffect(() => {
    getAllUserData();
  }, []);

  const HandelEmail = (e) => {
    setEmail(e.target.value);
    setAgent({ ...agent, email });
  };
  const HandelPassword = (e) => {
    setPassword(e.target.value);
    setAgent({ ...agent, password });
  };

  // check if the email nad password of agent exist in the server or not
  const checkEmail = () => {
    for (let i = 0; i < users.length; i++) {
      if (email === users[i].email && password === users[i].password) {
        setIsExist(true);
        setCurrentUser(users[i]);
      } else {
        setIsExist(false);
      }
      if (email.length === 0) {
        setIsExist(false);
      }
    }
  };
  const currentUserHandler = () => {};
  const showValidation = () => {
    if (!isExist) {
      return (
        <div className="validation">
          <h2>login failed invalid email-id or password</h2>
        </div>
      );
    }
  };

  // handel the eye Password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const HandelSubmit = (e) => {
    e.preventDefault();
    checkEmail();

    if (email === "admin" && password === "admin") {
      navigate("/admindashboard");
    }
    if (isExist === true) {
      setIsSignedIn(true);
      navigate("/");
    }
  };
  return (
    <Fragment>
      <div className="register-contianer dark-theme">
        <div className="register-leftside">
          <div className="register-content-container">
            <div className="register-name">MARKETAK</div>
            <div className="register-description">
              Your trusted place to buy your products
            </div>
            <button className="register-leftside-button">About Us</button>
          </div>
          <div className="first-cirlce"></div>
          <div className="second-cirlce"></div>
        </div>
        <div className="register-rightside">
          <div className="form-register-container">
            <div className="form-register-title">
              <div className="form-register-title-1">Hello</div>
              <div className="form-register-title-2">
                Sign in to get started
              </div>
            </div>
            <form
              className="form-register-input-fields"
              onSubmit={HandelSubmit}
            >
              <input
                type="text"
                placeholder="Email"
                className="register-input-field"
                onChange={HandelEmail}
              />
              <div className="passwordFelid">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="register-input-field passwordFelid"
                  onChange={HandelPassword}
                />
                <i
                  class="fa fa-eye"
                  aria-hidden="false"
                  onMouseDown={togglePasswordVisibility}
                ></i>
              </div>
              <Link to={"/Register"}>
                <span id="Sign-up">Sign up</span>
              </Link>
              <button
                className="register-input-submit"
                onClick={() => currentUserHandler()}
              >
                Sign In
              </button>
            </form>
            {showValidation()}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
