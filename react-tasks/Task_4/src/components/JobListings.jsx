// src/components/JobListings.jsx
import React, { useState, useEffect } from 'react';
import Filter from './Filter';

// Simulated API fetch function
const fetchJobListings = async (filters) => {
  const allJobs = [
    { id: 1, title: 'Software Engineer', category: 'Engineering', datePosted: '2024-09-10' },
    { id: 2, title: 'Marketing Manager', category: 'Marketing', datePosted: '2024-09-12' },
    { id: 3, title: 'Data Scientist', category: 'Engineering', datePosted: '2024-09-11' },
    { id: 4, title: 'HR Specialist', category: 'Human Resources', datePosted: '2024-09-13' },
    { id: 5, title: 'Product Manager', category: 'Product', datePosted: '2024-09-15' },
    { id: 6, title: 'Graphic Designer', category: 'Design', datePosted: '2024-09-14' },
    { id: 7, title: 'UX/UI Designer', category: 'Design', datePosted: '2024-09-09' },
    { id: 8, title: 'Sales Executive', category: 'Sales', datePosted: '2024-09-10' },
    { id: 9, title: 'Marketing Coordinator', category: 'Marketing', datePosted: '2024-09-08' },
    { id: 10, title: 'Network Engineer', category: 'Engineering', datePosted: '2024-09-07' },
    { id: 11, title: 'DevOps Engineer', category: 'Engineering', datePosted: '2024-09-10' },
    { id: 12, title: 'Recruiter', category: 'Human Resources', datePosted: '2024-09-10' },
    { id: 13, title: 'Content Writer', category: 'Marketing', datePosted: '2024-09-06' },
    { id: 14, title: 'Product Designer', category: 'Design', datePosted: '2024-09-06' },
    { id: 15, title: 'Business Analyst', category: 'Product', datePosted: '2024-09-05' },
    { id: 16, title: 'Customer Support Specialist', category: 'Customer Support', datePosted: '2024-09-04' },
    { id: 17, title: 'Account Manager', category: 'Sales', datePosted: '2024-09-02' },
    { id: 18, title: 'Full Stack Developer', category: 'Engineering', datePosted: '2024-09-01' },
    { id: 19, title: 'Data Engineer', category: 'Engineering', datePosted: '2024-08-31' },
    { id: 20, title: 'Marketing Analyst', category: 'Marketing', datePosted: '2024-09-03' },
    { id: 21, title: 'Digital Marketing Specialist', category: 'Marketing', datePosted: '2024-09-02' },
    { id: 22, title: 'IT Support Technician', category: 'Engineering', datePosted: '2024-09-01' },
    { id: 23, title: 'Operations Manager', category: 'Operations', datePosted: '2024-09-01' },
    { id: 24, title: 'Software Architect', category: 'Engineering', datePosted: '2024-09-04' },
    { id: 25, title: 'Project Manager', category: 'Product', datePosted: '2024-08-30' },
    { id: 26, title: 'Graphic Illustrator', category: 'Design', datePosted: '2024-08-30' },
    { id: 27, title: 'Customer Success Manager', category: 'Customer Support', datePosted: '2024-08-29' },
    { id: 28, title: 'Social Media Manager', category: 'Marketing', datePosted: '2024-08-28' },
    { id: 29, title: 'Backend Developer', category: 'Engineering', datePosted: '2024-08-27' },
    { id: 30, title: 'Data Analyst', category: 'Engineering', datePosted: '2024-08-26' },
  ];

  return allJobs.filter((job) => {
    if (filters.text && !job.title.toLowerCase().includes(filters.text.toLowerCase())) {
      return false;
    }
    if (filters.category && job.category !== filters.category) {
      return false;
    }
    if (filters.datePosted && job.datePosted !== filters.datePosted) {
      return false;
    }
    return true;
  });
};

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleApplyFilters = async (filters) => {
    setLoading(true);
    const filteredJobs = await fetchJobListings(filters);
    setJobs(filteredJobs);
    setLoading(false);
  };

  useEffect(() => {
    handleApplyFilters({});
  }, []);

  const filters = [
    { name: 'text', type: 'text', placeholder: 'Search by job title' },
    {
      name: 'category',
      type: 'select',
      placeholder: 'Filter by category',
      options: ['Engineering', 'Marketing', 'Design', 'Sales', 'Human Resources', 'Product', 'Customer Support', 'Operations'],
    },
    { name: 'datePosted', type: 'date', placeholder: 'Filter by date posted' },
  ];

  return (
    <div className="job-listings">
      <h2>Job Listings</h2>
      <Filter filters={filters} onApplyFilters={handleApplyFilters} />
      <div className="jobs-container">
        {loading ? (
          <p>Loading jobs...</p>
        ) : (
          <ul className="jobs-list">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <li key={job.id} className="job-card">
                  <h3>{job.title}</h3>
                  <p>{job.category}</p>
                  <p>Date Posted: {job.datePosted}</p>
                </li>
              ))
            ) : (
              <p>No jobs found</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobListings;
