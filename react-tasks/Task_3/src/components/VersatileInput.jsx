// VersatileInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './VersatileInput.css';

const VersatileInput = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  size = 'medium',
  shape = 'rounded',
  ...props
}) => {
  const inputClass = `input ${size} ${shape} ${error && touched ? 'error' : ''}`;

  return (
    <div className="versatile-input">
      {label && <label htmlFor={name} className="input-label">{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        className={inputClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && touched && <div className="input-error">{error}</div>}
    </div>
  );
};

VersatileInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['rounded', 'square']),
};

export default VersatileInput;
