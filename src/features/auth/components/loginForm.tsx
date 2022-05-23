import React from "react";
import { useFormik } from "formik";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Button from "@mui/material/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../../../firebase";
import * as Yup from "yup";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const LoginForm = () => {
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithPopup(appAuth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential?.accessToken;
          // // The signed-in user info.
          // const user = result.user;
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
          alert(
            `Error ${errorCode} ${errorMessage}  of ${email}  >>>> ${credential} `
          );
        });
      console.log(user);
      // user ? window.location.replace("/dashboard/home") : alert("Try Again");
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .min(8, "Password must have 10 characters")
        .required("Password Required"),
    }),
    onSubmit: async (values) => {
      try {
        const user = await signInWithEmailAndPassword(
          appAuth,
          values.email,
          values.password
        );
        alert("Successfully Login");
        window.location.replace("/dashboard/home");
      } catch (error) {
        alert(error);
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
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
          className="p-2 rounded-3xl shadow pl-4 mt-4 w-full "
        />
        {formik.touched.email && formik.errors.email}
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
          className="p-2 rounded-3xl shadow pl-4 mt-4 w-full "
        />
        {formik.touched.password && formik.errors.password}
        <br />
        <div className="mt-20" />

        <div className="w-full flex flex-row items-center justify-center">
          <div className="w-auto p-1 mr-3 hover:shadow hover:bg-white rounded">
            <img
              src="https://img.icons8.com/fluency/48/000000/google-logo.png"
              onClick={handleGoogleLogin}
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
      </form>
    </div>
  );
};
