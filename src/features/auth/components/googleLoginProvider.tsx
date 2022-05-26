import React, { useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { appAuth } from "../../../firebase";
const provider = new GoogleAuthProvider();

export const googleLoginProviderFn = async () => {
  try {
    const user = await signInWithPopup(appAuth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // setUser(result.user);
        window.location.replace("/dashboard/home");

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(
          `Error ${errorCode} ${errorMessage}  of ${email}  >>>> ${credential} `
        );
      });
  } catch (e) {
    console.log(e);
  }
};
