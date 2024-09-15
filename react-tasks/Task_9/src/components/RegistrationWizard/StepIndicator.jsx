import React from 'react';

const StepIndicator = ({ currentStep, totalSteps }) => (
  <div>
    {Array.from({ length: totalSteps }).map((_, index) => (
      <span key={index} style={{ fontWeight: index === currentStep ? 'bold' : 'normal' }}>
        {index + 1}
      </span>
    ))}
  </div>
);

export default StepIndicator;
