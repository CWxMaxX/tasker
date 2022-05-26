import React from "react";
import { useFormik } from "formik";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Button from "@mui/material/Button";
import { appAuth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { googleLoginProviderFn } from "./googleLoginProvider";

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      try {
        const user = await createUserWithEmailAndPassword(
          appAuth,
          values.email,
          values.password
        );
        console.log("User >>>>>>>>>>>>>>>", user);
        window.location.replace("/dashboard/home");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="mt-10">
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
          className="p-2 rounded-3xl shadow pl-4 mt-4 w-full "
        />
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
          className="p-2 rounded-3xl shadow pl-4 mt-4 w-full "
        />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          placeholder="Confirm Password"
          className="p-2 rounded-3xl shadow pl-4 mt-4 w-full "
        />
        <br />
        <div className="mt-20" />
        <div className="w-full flex flex-row items-center justify-center">
          <div className="w-auto p-1 mr-3 hover:shadow hover:bg-white rounded">
            <img
              src="https://img.icons8.com/fluency/48/000000/google-logo.png"
              onClick={googleLoginProviderFn}
              width={30}
              alt="Google Icon"
            />
          </div>
          <Button
            variant="contained"
            endIcon={<DoubleArrowIcon />}
            type="submit"
          >
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};
