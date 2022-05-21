import React from "react";
import { FloatingContainer } from "../../components/floatingContainer/FloatingContainer";
import { LoginForm } from "./components/loginForm";

const banner = require("./assets/banner.png");

export const Login = () => {
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
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: 0,
        }}
      >
        <div className="flex flex-row h-full">
          <div className="w-1/12 w-full"></div>
          <div className="w-11/12 w-full  h-full ">
            <div className="sm:w-96 w-11/12  h-full flex items-center">
              <FloatingContainer title="Login">
                <div>
                  Enter your email and password to login
                  <LoginForm />
                </div>
              </FloatingContainer>
            </div>
            <div className="w-8/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
