import React, { useState } from "react";

import logo from "../assets/logo.svg";
import Home from "../assets/home-solid.svg";
import { NavLink } from "react-router-dom";
import {
  CalendarHeart,
  Hospital,
  Stethoscope,
  UserRectangle,
} from "@phosphor-icons/react";

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setProfileClick] = useState(false);
  const handleProfileClick = () => setProfileClick(!profileClick);

  const getItemClass = ({ isActive }) =>
    `sidebar-item${isActive ? " active" : ""}`;

  return (
    <div className="sidebar">
      <button
        className={`sidebar-toggle${click ? " is-open" : ""}`}
        onClick={() => handleClick()}
      >
        Click
      </button>
      <div className="sidebar-shell">
        <div className="sidebar-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={`sidebar-list${click ? " is-open" : ""}`}>
          <NavLink onClick={() => setClick(false)} to="/" end className={getItemClass}>
            <img src={Home} alt="Home" />
            <span className={`sidebar-text${click ? " is-open" : ""}`}>
              Home
            </span>
          </NavLink>
          <NavLink
            onClick={() => setClick(false)}
            to="/patients"
            className={getItemClass}
          >
            <UserRectangle className="sidebar-icon" size={20} weight="fill" />
            <span className={`sidebar-text${click ? " is-open" : ""}`}>
              Patients
            </span>
          </NavLink>
          <NavLink
            onClick={() => setClick(false)}
            to="/calender"
            className={getItemClass}
          >
            <CalendarHeart className="sidebar-icon" size={20} weight="fill" />
            <span className={`sidebar-text${click ? " is-open" : ""}`}>
              Calender
            </span>
          </NavLink>
          <NavLink
            onClick={() => setClick(false)}
            to="/doctors"
            className={getItemClass}
          >
            <Stethoscope className="sidebar-icon" size={20} weight="fill" />
            <span className={`sidebar-text${click ? " is-open" : ""}`}>
              Doctors
            </span>
          </NavLink>
          <NavLink
            onClick={() => setClick(false)}
            to="/appointments"
            className={getItemClass}
          >
            <Hospital className="sidebar-icon" size={20} weight="fill" />
            <span className={`sidebar-text${click ? " is-open" : ""}`}>
              Appointments
            </span>
          </NavLink>
        </ul>

        <div className={`sidebar-profile${profileClick ? " is-open" : ""}`}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <div
            className={`sidebar-details${profileClick ? " is-open" : ""}`}
          >
            <div className="sidebar-name">
              <h4>Jhon&nbsp;Doe</h4>
              <a href="/#">view&nbsp;profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
