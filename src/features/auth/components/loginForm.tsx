import React from "react";
import { useFormik } from "formik";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Button from "@mui/material/Button";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
        <br />
        <div className="mt-20"></div>
        <Button variant="contained" endIcon={<DoubleArrowIcon />} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
