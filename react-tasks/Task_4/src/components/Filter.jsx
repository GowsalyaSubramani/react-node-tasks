// src/components/Filter.jsx
import React, { useState } from 'react';

const Filter = ({ filters, onApplyFilters }) => {
  const [filterValues, setFilterValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filterValues);
  };

  return (
    <div className="filter-container">
      {filters.map((filter, index) => {
        if (filter.type === 'text') {
          return (
            <input
              key={index}
              type="text"
              name={filter.name}
              placeholder={filter.placeholder}
              onChange={handleInputChange}
            />
          );
        } else if (filter.type === 'select') {
          return (
            <select key={index} name={filter.name} onChange={handleInputChange}>
              <option value="">{filter.placeholder}</option>
              {filter.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        } else if (filter.type === 'date') {
          return (
            <input
              key={index}
              type="date"
              name={filter.name}
              onChange={handleInputChange}
            />
          );
        }
        // Add more filter types (checkbox, range, etc.) as needed
        return null;
      })}
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;
