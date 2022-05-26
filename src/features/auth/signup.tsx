import React from "react";
import { FloatingContainer } from "../../components/floatingContainer/FloatingContainer";
import { SignupForm } from "./components/signupForm";
import Button from "@mui/material/Button";

// Images
const wordingImg = "/assets/Images/wording.png";
const banner = require("./assets/banner.png");

export const Signup = () => {
  return (
    <div>
      <img
        src={banner}
        alt="Banner"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: -10,
          objectFit: "cover",
        }}
      />
      <img
        src={wordingImg}
        alt="wording"
        className="sm:float-right ml-auto mr-auto py-5 sm:mt-auto sm:mb-auto sm:top-0 sm:bottom-0 sm:absolute sm:right-5"
      />
      <span className="absolute right-10 top-5 z-10">
        <Button
          variant="contained"
          onClick={() => window.open("/auth/login", "_self")}
        >
          Login
        </Button>
      </span>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: 0,
        }}
      >
        <div className="flex flex-row sm:h-full">
          <div className="w-1/12 w-full" />
          <div className="w-11/12 w-full  h-full ">
            <div className="sm:w-96 w-11/12  h-full flex items-center">
              <FloatingContainer title="Sign up">
                <div>
                  Enter your email and password to register
                  <SignupForm />
                </div>
              </FloatingContainer>
            </div>
            <div className="w-8/12" />
          </div>
        </div>
      </div>
    </div>
  );
};
