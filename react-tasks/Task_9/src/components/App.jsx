import React, { useState } from 'react';
import PersonalInfoStep from './RegistrationWizard/PersonalInfoStep';
import SetPasswordStep from './RegistrationWizard/SetPasswordStep';
import ConfirmationStep from './RegistrationWizard/ConfirmStep';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    alert('Form Submitted Successfully!');
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      {step === 1 && (
        <PersonalInfoStep formData={formData} handleChange={handleChange} nextStep={nextStep} />
      )}
      {step === 2 && (
        <SetPasswordStep formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <ConfirmationStep formData={formData} handleSubmit={handleSubmit} />
      )}

      <div className="step-indicator">
        <span className={step === 1 ? 'active' : ''}>1</span>
        <span className={step === 2 ? 'active' : ''}>2</span>
        <span className={step === 3 ? 'active' : ''}>3</span>
      </div>
    </div>
  );
};

export default App;
