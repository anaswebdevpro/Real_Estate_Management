import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Required";
        if (!values.email) errors.email = "Required";
        if (!values.password) errors.password = "Required";
        if (values.password !== values.confirmPassword)
          errors.confirmPassword = "Passwords do not match";
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // handle signup logic here
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-80">
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
          <ErrorMessage name="name" component="div" className="text-red-500" />
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input input-bordered"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="text-red-500"
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
    <a href="/login" className="mt-2 text-blue-500">
      Already have an account? Login
    </a>
  </div>
);

export default Signup;
