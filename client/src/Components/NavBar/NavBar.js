import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { toggleFalse } from "../../JS/actions/contact";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <Link to="/">
        <button className="btn">Contact List</button>
      </Link>
      <Link to="/addContact">
        <button className="btn" onClick={() => dispatch(toggleFalse())}>
          {" "}
          add Contact
        </button>
      </Link>
    </header>
  );
};

export default NavBar;
