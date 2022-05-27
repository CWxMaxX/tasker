import { ErrorMessage, useField, FieldInputProps } from "formik";

export const TextField = (props: FieldInputProps<any> | any) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <input
        {...props}
        className={`border-grey-400 border shadow mt-5 p-2 px-5 rounded-3xl focus:border-blue-500 ${
          props.className
        } ${meta.touched && meta.error && "border-red-600 bg-red-50"}`}
        {...field}
      />
      <br />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
