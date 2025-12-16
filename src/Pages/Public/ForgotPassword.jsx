import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ForgotPassword = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
    <Formik
      initialValues={{ email: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) errors.email = "Required";
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // handle forgot password logic here
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-80">
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            Send Reset Link
          </button>
        </Form>
      )}
    </Formik>
    <a href="/login" className="mt-2 text-blue-500">
      Back to Login
    </a>
  </div>
);

export default ForgotPassword;
