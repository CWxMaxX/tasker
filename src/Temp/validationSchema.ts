import * as Yup from "yup";

export const validationObject = Yup.object({
  name: Yup.string().required("Name Required"),
  country: Yup.string().required("Country is Required"),
});

export const loginValidation = Yup.object({
  email: Yup.string().email().required("Email Required"),
  password: Yup.string()
    .min(8, "Enter minimum 8 characters")
    .required("Password Required"),
});

export const signupValidation = Yup.object({
  email: Yup.string().email().required("Email Required"),
  password: Yup.string()
    .min(8, "Enter minimum 8 characters")
    .required("Password Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});
