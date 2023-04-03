import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./components/ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav>
      <ActiveLink style={{ marginRight: "20px" }} to="/">
        Home
      </ActiveLink>
      <ActiveLink style={{ margin: "20px" }} to="/about">
        About
      </ActiveLink>
      <ActiveLink style={{ marginRight: "20px" }} to="/contact">
        Contact
      </ActiveLink>
      <ActiveLink style={{ marginRight: "20px" }} to="/friends">
        Friends
      </ActiveLink>
      <ActiveLink style={{ marginRight: "20px" }} to="/posts">
        Posts
      </ActiveLink>
    </nav>
  );
};

export default Header;
