// Step 3: ConfirmationStep.jsx
const ConfirmationStep = ({ formData, handleSubmit }) => {
    return (
      <div>
        <h2>Confirm Your Details</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Password:</strong> {formData.password.replace(/./g, '*')}</p>
        
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  };
  
  export default ConfirmationStep;
  