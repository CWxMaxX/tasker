import React from "react";
import { Form, Formik, useFormik } from "formik";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Button from "@mui/material/Button";
import { appAuth } from "../../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { googleLoginProviderFn } from "./googleLoginProvider";
import { signupValidation } from "../../../Temp/validationSchema";
import { TextField } from "../../../components/input/TextField";

export const SignupForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values) => {
          try {
            const user = await createUserWithEmailAndPassword(
              appAuth,
              values.email,
              values.password
            );
            await updateProfile(user.user, { displayName: values.name });
            console.log("User >>>>>>>>>>>>>>>", user.user);
            window.location.replace("/dashboard/home");
          } catch (error) {
            console.log(error);
          }
        }}
        validationSchema={signupValidation}
      >
        {(formik) => (
          <Form>
            <TextField
              name={"name"}
              type={"text"}
              placeholder={"Full Name"}
              className={"w-full"}
            />
            <TextField
              name="email"
              type="email"
              placeholder={"Email"}
              className="w-full"
            />
            <TextField
              name="password"
              type={"password"}
              placeholder={"Password"}
              className={"w-full"}
            />
            <TextField
              name={"confirmPassword"}
              type={"password"}
              placeholder={"Re-Enter password"}
              className={"w-full"}
            />
            <br />
            <div className="mt-6" />

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
