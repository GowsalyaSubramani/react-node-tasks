import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';

// Simulated API call to fetch profile sections
const fetchProfileData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: 'Overview',
          content: <div><h3>Profile Overview</h3><p>Welcome to the profile overview. Here you can see the basic information about the user.</p></div>,
        },
        {
          label: 'Settings',
          content: <div><h3>Profile Settings</h3><p>Manage your account settings, preferences, and privacy here.</p></div>,
        },
        {
          label: 'Activity',
          content: <div><h3>Recent Activity</h3><p>View recent activities and interactions of the user.</p></div>,
        },
      ]);
    }, 1000); // Simulate network delay
  });
};

const ProfileDashboard = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfileData().then((data) => {
      setProfileData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading profile data...</p>;
  }

  return (
    <div>
      <h2>User Profile Dashboard</h2>
      <Tabs tabsData={profileData} />
    </div>
  );
};

export default ProfileDashboard;
