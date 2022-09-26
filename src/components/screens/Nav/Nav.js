import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 200) {
      handleShow(true)
    } else {
      handleShow(false)
    } 
  }

  useEffect(
    () => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.removeEventListener("scroll", transitionNavBar);
    }, []
  );

  return (
    <div className={`nav  ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix-Logo"
        />
        <img
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
          alt="Profile-Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
