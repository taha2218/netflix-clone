import React, { useRef } from "react";
import { auth } from "../../utils/firebase/firebase.utils";
import "./SignUp.css";

function SignUp() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {

    }).catch((error) => {
      alert(error.message);
    });
  };

  const SignIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value 
    ).then((authUser) => {
    }).catch((error) => {
      
      alert(error.message);
    });
  }

  return (
    <div className="signUp__container">
      <div className="signUp__screen">
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} placeholder="Email Address" type="email"></input>
          <input ref={passwordRef} placeholder="Password" type="password"></input>
          <button 
          type="submit"
          onClick={SignIn}>Sign In</button>
          <h4>
            <span className="signUpScreen__gray">New to Netflix ?   </span>
            <span 
            className="signUpScreen__link"
            onClick={register}>Sign Up now.</span>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
