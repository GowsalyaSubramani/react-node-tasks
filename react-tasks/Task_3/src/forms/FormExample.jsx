// FormExample.jsx
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import VersatileInput from '../components/VersatileInput';
import './FormExample.css';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  age: Yup.number().min(18, 'You must be at least 18 years old').required('Age is required'),
});

const FormExample = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">User Registration</h1>
      <Formik
        initialValues={{ username: '', password: '', age: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form data', values);
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="form">
            <VersatileInput
              type="text"
              name="username"
              label="Username"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username}
              touched={touched.username}
            />
            <VersatileInput
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />
            <VersatileInput
              type="number"
              name="age"
              label="Age"
              placeholder="Enter your age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.age}
              touched={touched.age}
            />
            <button type="submit" className="submit-button">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormExample;
