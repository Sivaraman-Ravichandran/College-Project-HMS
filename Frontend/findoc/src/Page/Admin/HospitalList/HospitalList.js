import React from 'react';
import './HospitalList.css'; // Import the CSS file for styling

const HospitalList = () => {
  // Dummy data for hospitals (replace this with actual data or an API call in the future)
  const hospitals = [
    { id: '#001', name: 'City Hospital', location: 'New York' },
    { id: '#002', name: 'Green Valley Hospital', location: 'California' },
    { id: '#003', name: 'Riverbend Clinic', location: 'Texas' },
    // Add more hospitals as needed
  ];

  return (
    <div className="hospital-list-container">
      <h2>Hospital List</h2>
      <table className="hospital-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Hospital Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((hospital) => (
            <tr key={hospital.id}>
              <td>{hospital.id}</td>
              <td>{hospital.name}</td>
              <td>{hospital.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalList;
