import React from "react";
import { Field } from "formik";
const CustomInput = ({ id, placeholder, title }) => {
  return (
    <div className="mb-6">
      <label className="block text-black text-lg mb-4 " htmlFor={id}>
        {title}
      </label>
      <Field
        className="bg-inputBackgroundColor rounded-2xl w-full py-4 px-4"
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
