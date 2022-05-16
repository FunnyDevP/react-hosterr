import React from "react";
import "./Header.scss";
import Logo from "../assets/Logo.svg";

const Header = (): JSX.Element => {
  return (
    <div className="container">
      <div className="container__logo">
        <img src={Logo} alt="hosterr-logo" />
        <div className="container__logo__hiring">Hosterr is hiring!</div>
      </div>
      <div className="container__content">
        <div>Plans</div>
        <div>Find Domain</div>
        <div>Why Hosterr</div>
      </div>
      <div className="container__signin">
        <div>Sign in</div>
        <div className="container__signin__join-waitlist-bt">Join Waitlish</div>
      </div>
    </div>
  );
};

export default Header;
