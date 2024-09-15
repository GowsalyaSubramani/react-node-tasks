// src/components/CustomFields/Checkbox.js
import React from 'react';

const Checkbox = ({ name, checked, onChange, onBlur }) => (
  <input
    name={name}
    type="checkbox"
    checked={checked}
    onChange={onChange}
    onBlur={onBlur}
  />
);

export default Checkbox;
