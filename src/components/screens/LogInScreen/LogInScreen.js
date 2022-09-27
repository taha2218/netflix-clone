import React, { useState } from "react";
import SignUp from "../../LogIn/SignUp";
import "./LogInScreen.css";

function LogInScreen() {
  const [signIn, setSignIn] = useState(false);

  function toggleSignIn() {
    setSignIn(true);
  }

  return (
    <div className="logInScreen">
      <div className="logInScreen__background">
        <img
          className="logInScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button className="logInScreen__button" onClick={toggleSignIn}>
          Sign In
        </button>
        <div className="logInScreen__gradient" />
      </div>
      <div className="logInScreen__body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>
              Unlimited films, TV <br /> shows and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="logInScreen__input">
              <form>
                <input type="email" placeholder="Email Address"></input>
                <button
                  className="logInScreen__getStarted"
                  onClick={toggleSignIn}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LogInScreen;
