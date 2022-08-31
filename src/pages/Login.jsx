import { useState } from "react";
import { Facebook, Twitter, Google } from "react-bootstrap-icons";
import loginValidation from "../utils/validation/loginValidation";

function Login() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errorList, setErrorList] = useState([]);

  const singinClicked = (e) => {
    e.preventDefault();

    setErrorList(loginValidation(userInfo));
    console.log(errorList);

    if (!errorList.length) {
      console.log(userInfo);
      setUserInfo({ email: "", password: "" });
    }
    
  };

  const displayErrors = (inputName) => {
    const inputErrorList = errorList.filter((item) => item.input == inputName);

    return inputErrorList.length ? (
      <ul className="alert alert-danger">
        {inputErrorList.map((item) =>
          item.input === inputName ? <li>{item.message}</li> : ""
        )}
      </ul>
    ) : (
      ""
    );
  };

  return (
    <div className="container w-25 my-5 text-center bg-light shadow shadow-sm">
      <h2>Log in</h2>

      <form onSubmit={singinClicked}>
        <div className="form-outline mb-4">
        <label className="form-label" for="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            className="form-control"
          />
        
          <div>
            {displayErrors("email")}
          </div>
        </div>

        <div className="form-outline mb-4">
        <label className="form-label" for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
          <div>
            {displayErrors("password")}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label className="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i class="bi bi-facebook"></i>
            <Facebook />
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
            <Google />
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
            <Twitter />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
