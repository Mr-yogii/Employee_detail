import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.log('Error fetching user data');
      }
    };

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {userData.username}</p>
    </div>
  );
}

export default Dashboard;
