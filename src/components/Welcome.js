import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";


const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithPopup(auth, provider)
  };
  

  return (
    <main className="welcome">
      <h2>Bem-vindo(a) ao Chat-CAN</h2>
      {/* <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} /> */}
      <p>Entre com sua conta Google e entre na conversa</p>
      <button className="sign-in">
        <img
          className="br-pill"
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;