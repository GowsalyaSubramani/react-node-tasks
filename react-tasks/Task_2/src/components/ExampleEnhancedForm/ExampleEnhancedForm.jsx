// src/components/ExampleEnhancedForm/ExampleEnhancedForm.js
import React, { useState } from 'react';
import EnhancedForm from '../EnhancedForm/EnhancedForm';
import validationSchema from '../../configs/validationSchema';
import Input from '../CustomFields/Input';
import Select from '../CustomFields/Select';
import DatePicker from '../CustomFields/DatePicker';
import Checkbox from '../CustomFields/Checkbox';
import './ExampleEnhancedForm.css'; // Import the CSS file

// Define the fields configuration
const fields = [
  { name: 'name', label: 'Name', component: Input },
  { name: 'email', label: 'Email', component: Input },
  {
    name: 'gender',
    label: 'Gender',
    component: Select,
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
  },
  { name: 'birthdate', label: 'Birthdate', component: DatePicker },
  { name: 'terms', label: 'Accept Terms', component: Checkbox },
];

// Define the initial values
const initialValues = {
  name: '',
  email: '',
  gender: '',
  birthdate: '',
  terms: false,
};

const ExampleEnhancedForm = () => {
  const [submittedValues, setSubmittedValues] = useState(null);

  const handleSubmit = (values) => {
    setSubmittedValues(values);
  };

  return (
    <div className="container">
      <div className="form-section">
        <h1 className="form-title">Example Enhanced Form</h1>
        <EnhancedForm
          fields={fields}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
      </div>

      {submittedValues && (
        <div className="submitted-data-section">
          <h2>Submitted Data</h2>
          <ul>
            {Object.keys(submittedValues).map(key => (
              <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {submittedValues[key].toString()}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExampleEnhancedForm;
