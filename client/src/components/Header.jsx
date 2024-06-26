import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const navItems = (
  <>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="/profile">Profile</a>
    </li>
  </>
);

export default function Header() {
  return (
    <div className="px-5 bg-slate-200">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Madefor
          </Link>
        </div>
        <div className="form-control w-[350px] items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered  w-full pl-10"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-slate-600" />{" "}
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <Link to="/sign-in">
            <a className="btn border-none bg-slate-600 text-white hover:text-black md:mr-5">
              SignIn
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
