import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});


const SlpFisrtScreen = () => {
  const handleSubmit = (values) => {
    console.log(values); // You can do whatever you want with the form values here
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default SlpFisrtScreen