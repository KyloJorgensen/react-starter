import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/ui/button';
import { useAuth } from '../context/auth';
import logoGreen from '../images/cove-logo-green-light.svg';

const validationSchema = Yup.object({
  email: Yup.string().email().required("Required"),
  password: Yup.string().required("Required")
})

function Login() {
  const { login } = useAuth();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { email, password } = e.target.elements;
  //   login({ email: email.value, password: password.value });
  // };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit(values) {
      login({ email: values.email, password: values.password });
    },
  });

  return (
    <div className="login">
      <img src={logoGreen} alt="Cove Logo" />
      <h1 className="login-title">Log in to Cove</h1>
      <div className="login-form">
        <form className="login-form__inner" onSubmit={handleSubmit}>
          <input
            className="login-form__input"
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email ? errors.email : null}
          <input
            className="login-form__input"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password ? errors.password : null}
          <Button type="submit">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
