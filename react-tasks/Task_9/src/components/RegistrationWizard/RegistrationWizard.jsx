import React, { useState } from 'react';
import StepIndicator from './StepIndicator'; // Import StepIndicator if used

const RegistrationWizard = ({ steps, onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});

  const handleNext = (stepData) => {
    setData(prevData => ({ ...prevData, ...stepData }));
    if (currentStep < steps.length - 1) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      onFinish(data);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  return (
    <div className="container">
      <h1>Registration Wizard</h1>
      <StepIndicator currentStep={currentStep} totalSteps={steps.length} />
      {steps[currentStep]}
      <div className="button-group">
        <button onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={() => handleNext({})}>
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default RegistrationWizard;
