// src/components/CustomFields/Input.js
import React from 'react';

const Input = ({ name, value, onChange, onBlur, type = 'text' }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    type={type}
  />
);

export default Input;
