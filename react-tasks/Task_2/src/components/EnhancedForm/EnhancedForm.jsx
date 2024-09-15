// src/components/EnhancedForm/EnhancedForm.js
import React from 'react';
import { useFormik } from 'formik';
import './EnhancedForm.css'; // Import the CSS file

const EnhancedForm = ({ fields, initialValues, validationSchema, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const renderField = (field) => {
    const { name, component: Component, ...rest } = field;
    return (
      <div key={name} className="form-group">
        <label htmlFor={name} className="form-label">{field.label}</label>
        <Component
          id={name}
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-control"
          {...rest}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="form-error">{formik.errors[name]}</div>
        )}
      </div>
    );
  };

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      {fields.map(renderField)}

      <div className="form-buttons">
        <button type="submit" className="form-button submit-button">Submit</button>
        <button
          type="button"
          onClick={() => formik.resetForm()}
          className="form-button reset-button"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default EnhancedForm;
