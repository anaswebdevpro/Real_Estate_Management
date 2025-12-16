import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) errors.email = "Required";
        if (!values.password) errors.password = "Required";
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // handle login logic here
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
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
    <a href="/forgot-password" className="mt-2 text-blue-500">
      Forgot Password?
    </a>
    <a href="/signup" className="mt-2 text-blue-500">
      Don't have an account? Sign up
    </a>
  </div>
);

export default Login;
