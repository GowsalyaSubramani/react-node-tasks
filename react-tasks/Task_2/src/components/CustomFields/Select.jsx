// src/components/CustomFields/Select.js
import React from 'react';

const Select = ({ name, value, onChange, onBlur, options }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  >
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
