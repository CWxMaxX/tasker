import React from "react";
import "./floatingContainer.css";

interface Props {
  title?: string;
  children?: JSX.Element;
}

export const FloatingContainer = ({ title, children }: Props) => {
  return (
    <div className="w-full  loginContainer shadow-lg">
      <div className="w-full bg-white  shadow-sm titleSection  ">{title}</div>
      <div className="w-full h-full p-8">{children}</div>
    </div>
  );
};
