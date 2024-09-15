import React, { useState } from 'react';

const SetPasswordStep = ({ formData, handleChange, nextStep, prevStep }) => {
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      nextStep(); // Proceed to the next step
    }
  };

  return (
    <div>
      <h2>Set Your Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {error && <span>{error}</span>}

        <div style={{ marginTop: '1rem' }}>
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default SetPasswordStep;
