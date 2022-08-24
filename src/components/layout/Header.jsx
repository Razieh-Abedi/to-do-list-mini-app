import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
// to change login/logout button
const [loginLogout, setLoginLogout] = useState(false);
const clickLoginLogout = ()=> {
  setLoginLogout(!loginLogout);
}
  return (
    <div className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-around align-items-center">
        <ul>
          <li className="mx-2 list-unstyled d-inline">
           <span>Organize your tasks in the</span>
          </li>
          <li className="mx-2 list-unstyled d-inline">
            <h1 className="d-inline">To Do List</h1>
          </li>
        </ul>
        <ul>
          <li className="mx-2 list-unstyled d-inline">
            <button className="btn btn-primary">
              {" "}
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
            </button>
          </li>
          <li className="mx-2 list-unstyled d-inline" onClick={clickLoginLogout}>
            {!loginLogout ? (
                <button type="button" className="btn btn-primary text-dark">
                  <Link to="/login" className="text-decoration-none text-white">
                    Log in
                  </Link>
                </button>
              ) : (
                <button type="button" className="btn btn-primary ">
                  <Link to="/" className="text-decoration-none text-white">
                    Sing out
                  </Link>
                </button>
              )}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
