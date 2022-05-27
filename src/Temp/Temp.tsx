import { Field, Form, Formik } from "formik";
import React from "react";
import { TextField } from "../components/input/TextField";
import { Button } from "@mui/material";
import * as Yup from "yup";
import { validationObject } from "./validationSchema";

function Temp() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          country: "",
        }}
        validationSchema={validationObject}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(formik) => (
          <div className={"pt-20"}>
            <Form>
              <TextField name="name" type="text" placeholder="Name" />
              <TextField name="country" type="text" placeholder="Country" />
              <Button
                type={"submit"}
                variant="outlined"
                sx={{ m: 4, zIndex: 10 }}
              >
                Submit
              </Button>
              <Button
                type={"reset"}
                variant="outlined"
                sx={{ m: 4 }}
                color="warning"
              >
                Reset
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Temp;
