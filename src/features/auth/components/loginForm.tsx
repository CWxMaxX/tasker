import React from "react";
import { useFormik } from "formik";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Button from "@mui/material/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../../../firebase";
import * as Yup from "yup";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string().min(10, "Password must have 10 characters"),
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
        <Button variant="contained" endIcon={<DoubleArrowIcon />} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
