// src/configs/validationSchema.js
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  birthdate: Yup.date().required('Birthdate is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
});

export default validationSchema;
