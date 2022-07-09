import { Button, TextField } from "@mui/material";
import { useState } from "react";
import DateField from "../../components/input/DateField";
import { SectionColumn, SectionRow } from "../../components/sections/sections";
import { User } from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useFormik } from "formik";
import * as yup from "yup";
import firebase from "firebase/compat";

interface AddTaskProps {
  user: User;
  handleCloseModal: Function;
}

interface FormDataType {
  title: string;
  description: string;
  date: string;
}

const validationSchema = yup.object({
  title: yup.string().required("Enter task title !"),
  description: yup.string().required("Enter task description !"),
  date: yup.date(),
});

const AddTaskCard = (props: AddTaskProps) => {
  const [date, setDate] = useState<string | undefined>("");

  const handleSubmit = async (user: User, values: FormDataType) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const timeStamp = new Date();
    console.log(docSnap.exists());
    console.log(timeStamp);
    if (docSnap.exists()) {
      try {
        const taskRef = await updateDoc(docRef, {
          taskList: arrayUnion(
            JSON.stringify({
              timeStamp: timeStamp,
              title: values.title,
              description: values.description,
              date: values.date,
            })
          ),
        });
        console.log("Task Ref=====>", taskRef);
      } catch (e) {
        console.log("Error ======> ex", e);
      }
    } else {
      try {
        const taskRef = await setDoc(docRef, {
          userName: user.displayName,
          userEmail: user.email,
          taskList: [
            JSON.stringify({
              timeStamp: timeStamp,
              title: values.title,
              description: values.description,
              date: values.date,
            }),
          ],
        });
        console.log("Task Ref=====>", taskRef);
      } catch (e) {
        console.log("Error ======> new", e);
      }
    }
    window.location.reload();
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let _values = { ...values, date: date ? date : "no-expire" };
      handleSubmit(props.user, _values)
        .then((res: any) => {
          console.log("Successfully added", res);
          props.handleCloseModal(false);
        })
        .catch((e: any) => {
          console.log("Unsuccessful", e);
        });
      formik.resetForm();
    },
  });

  return (
    <div>
      <SectionColumn className="w-full flex flex-col justify-between  overflow-auto mt-10">
        <form onSubmit={formik.handleSubmit}>
          <SectionColumn
            className="h-full w-full overflow-auto"
            style={{ minHeight: "200px", maxHeight: "450px" }}
          >
            <TextField
              id="title"
              label="Task Title"
              variant="standard"
              size="small"
              className="!mb-3"
              name={"title"}
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />

            <TextField
              id="description"
              label="Description"
              variant="standard"
              multiline
              size="small"
              className="!mb-3"
              name={"description"}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <SectionRow className="w-44">
              <DateField
                setDate={setDate}
                id={"date"}
                name={"date"}
                value={formik.values.date}
                onChange={formik.handleChange}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
              />
            </SectionRow>
            {/* <SectionRow className='w-1/2'></SectionRow> */}
          </SectionColumn>
          <SectionRow className="justify-end items-end w-full ">
            <div>
              <Button
                sx={{ mr: 3 }}
                color={"error"}
                onClick={() => props.handleCloseModal(false)}
              >
                Close
              </Button>
              <Button variant="contained" sx={{ mr: 3 }} type={"submit"}>
                Submit
              </Button>
            </div>
          </SectionRow>
        </form>
      </SectionColumn>
    </div>
  );
};

export default AddTaskCard;
