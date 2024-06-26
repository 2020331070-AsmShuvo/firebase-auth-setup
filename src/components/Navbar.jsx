import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { registerdUser, logOut } = useContext(AuthContext);
  const { regUser, setRegUser } = useContext(AuthContext);
  console.log(regUser);

  return (
    <div>
      <div className="navbar bg-gray-700 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              {
                regUser && <li>
                <NavLink to="/about">About</NavLink>
              </li>
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              {
                regUser && <li>
                <NavLink to="/about">About</NavLink>
              </li>
              }
          </ul>
        </div>
        <div className="navbar-end">
          <div className="m-1">
            {regUser ? (
              <div>
                <span>{regUser?.email}</span>
                <button onClick={logOut} className="btn btn-sm btn-secondary">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm btn-secondary">
                  SignIn
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
