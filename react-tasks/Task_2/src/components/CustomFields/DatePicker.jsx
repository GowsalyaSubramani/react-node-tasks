// src/components/CustomFields/DatePicker.js
import React from 'react';

const DatePicker = ({ name, value, onChange, onBlur }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    type="date"
  />
);

export default DatePicker;
