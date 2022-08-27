import { useState } from "react";
import { Facebook, Twitter, Google } from "react-bootstrap-icons";
function Login() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [updatedUserInfo, setUpdatedUserInfo] = useState(userInfo);
  const singinClicked = (updatedUserInfo) => {
    setUpdatedUserInfo([...userInfo, ...updatedUserInfo]);
    console.log(updatedUserInfo);
  };

  return (
    <div className="container w-25 my-5 text-center bg-light shadow shadow-sm">
      <h2>Log in</h2>
      <form>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            value={userInfo.email}
            onChange={(e) => setUserInfo(e.target.value)}
            className="form-control"
          />
          <label className="form-label" for="email">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            className="form-control"
            value={userInfo.password}
            onChange={(e) => setUserInfo(e.target.value)}
          />
          <label className="form-label" for="password">
            Password
          </label>
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

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={singinClicked}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            {/* <i className="fab fa-facebook-f"></i> */}
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
