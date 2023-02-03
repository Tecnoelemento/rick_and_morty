import styNavBar from "./Nav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav({ onSearch }) {
  return (
    <div className={styNavBar.nav}>
      <div className={styNavBar.nav__menu}>
        <NavLink
          className={(item) =>
            item.isActive ? styNavBar.active : styNavBar.link
          }
          to={"/home"}
        >
          Home
        </NavLink>
        <NavLink
          className={(item) =>
            item.isActive ? styNavBar.active : styNavBar.link
          }
          to={"/about"}
        >
          About
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
