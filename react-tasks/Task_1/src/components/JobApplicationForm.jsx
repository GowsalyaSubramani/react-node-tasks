import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import './JobApplicationForm.css'; // Import custom CSS for additional styling

// Simulate async API call for positions
const fetchPositions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 'frontend', label: 'Frontend Developer' },
        { value: 'backend', label: 'Backend Developer' },
        { value: 'devops', label: 'DevOps Engineer' },
        { value: 'fullstack', label: 'Full Stack Developer' },
      ]);
    }, 1000);
  });
};

// Simulate async API call for skills
const fetchSkills = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 'javascript', label: 'JavaScript' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'aws', label: 'AWS' },
        { value: 'react', label: 'React' },
        { value: 'docker', label: 'Docker' },
        { value: 'nodejs', label: 'Node.js' },
      ]);
    }, 1000);
  });
};

const JobApplicationForm = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const handlePositionChange = (selectedOption) => {
    setSelectedPosition(selectedOption);
  };

  const handleSkillsChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitted = {
      position: selectedPosition ? selectedPosition.label : 'None selected',
      skills: selectedSkills.length > 0 ? selectedSkills.map(skill => skill.label).join(', ') : 'None selected'
    };
    setSubmittedData(submitted);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Job Application Form</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Position Select */}
        <div className="form-group">
          <label className="form-label">Position</label>
          <CustomSelect
            asyncLoadOptions={fetchPositions}
            isMulti={false}
            onChange={handlePositionChange}
            placeholder="Select Position"
            customStyles={{
              container: { width: '100%', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '10px' },
              dropdown: { maxHeight: '150px', overflowY: 'auto', borderRadius: '4px' },
              option: { padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' },
              selected: { marginTop: '10px', fontWeight: 'bold', color: '#333' },
              search: { marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }
            }}
          />
        </div>

        {/* Skills Select */}
        <div className="form-group">
          <label className="form-label">Skills</label>
          <CustomSelect
            asyncLoadOptions={fetchSkills}
            isMulti={true}
            onChange={handleSkillsChange}
            placeholder="Select Skills"
            customStyles={{
              container: { width: '100%', maxWidth: '400px', border: '1px solid #ccc', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '10px' },
              dropdown: { maxHeight: '150px', overflowY: 'auto', borderRadius: '4px' },
              option: { padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' },
              selected: { marginTop: '10px', fontWeight: 'bold', color: '#333' },
              search: { marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }
            }}
            enableSearch={true}
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p><strong>Position:</strong> {submittedData.position}</p>
          <p><strong>Skills:</strong> {submittedData.skills}</p>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
