import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
          setCategory(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
      <div className=" bg-dark text-white">
        <h2 className="text-center">To Do List</h2>
        <div className="container w-100 d-flex justify-content-between align-items-center">
          <ul>
            <li className="mx-2 list-unstyled d-inline">
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
            </li>
            <li className="mx-2 list-unstyled d-inline">
              <Link className="text-decoration-none text-white" to="/login">
                Log in
              </Link>
            </li>
          </ul>
          <ul>
            <li className="mx-2 list-unstyled d-inline">
              {category.map((item) => (
                <button className="text-white bg-dark">{item}</button>
              ))}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  export default Header;