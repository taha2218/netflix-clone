import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav  ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__left">
          <img
            className="nav__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix-Logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <h5>Home</h5>
          <h5>TV Shows</h5>
          <h5>Movies</h5>
          <h5>News & Popular</h5>
          <h5>My List</h5>
        </div>
        <div className="">
          <img
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
            alt="Profile-Avatar"
            onClick={() => {
              navigate("/profile");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
