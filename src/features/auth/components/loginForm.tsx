import React from "react";
import { Form, Formik, useFormik } from "formik";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Button from "@mui/material/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../../../firebase";
import * as Yup from "yup";
import { googleLoginProviderFn } from "./googleLoginProvider";
import { TextField } from "../../../components/input/TextField";
import { loginValidation } from "../../../Temp/validationSchema";
import { unstable_ClassNameGenerator } from "@mui/material";

export const LoginForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().email("Invalid Email").required("Required"),
  //     password: Yup.string()
  //       .min(8, "Password must have 10 characters")
  //       .required("Password Required"),
  //   }),
  //   onSubmit: async (values) => {
  //     try {
  //       const user = await signInWithEmailAndPassword(
  //         appAuth,
  //         values.email,
  //         values.password
  //       );
  //       alert("Successfully Login");
  //       window.location.replace("/dashboard/home");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  // });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidation}
        onSubmit={async (values) => {
          try {
            console.log(values);
            const user = await signInWithEmailAndPassword(
              appAuth,
              values.email,
              values.password
            );

            window.location.replace("/dashboard/home");
          } catch (error) {
            console.log(error);
            alert(
              error === "FirebaseError: Firebase: Error (auth/user-not-found)."
                ? "Incorrect Email No user found"
                : "Invalid Credentials"
            );
          }
        }}
      >
        {(formik) => (
          <Form className="mt-10">
            <TextField
              name="email"
              type="email"
              placeholder="Email"
              className=" w-full "
            />
            <TextField
              name="password"
              type="text"
              placeholder="Password"
              className=" w-full "
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
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
