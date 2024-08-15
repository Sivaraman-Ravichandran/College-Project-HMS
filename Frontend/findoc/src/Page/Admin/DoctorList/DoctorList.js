import React from 'react';
import './DoctorList.css'; // Import the CSS file for styling

const DoctorList = () => {
  // Mock data for doctors (replace this with actual data or API call)
  const doctors = [
    {
      id: '#0008',
      name: 'Allan Stuart',
      designation: 'Oncologist',
      schedule: {
        Sun: 'NA',
        Mon: '9AM-2PM',
        Tue: '9AM-2PM',
        Wed: '9AM-2PM',
        Thu: '9AM-2PM',
        Fri: '9AM-2PM',
        Sat: '9AM-2PM',
      },
      img: 'https://via.placeholder.com/40', // Replace with actual image path
    },
    {
      id: '#0021',
      name: 'Smith White',
      designation: 'Neurology',
      schedule: {
        Sun: 'NA',
        Mon: '3PM-5PM',
        Tue: '3PM-5PM',
        Wed: '3PM-5PM',
        Thu: '3PM-5PM',
        Fri: '3PM-5PM',
        Sat: '3PM-5PM',
      },
      img: 'https://via.placeholder.com/40', // Replace with actual image path
    },
    // Add more doctors as needed
  ];

  return (
    <div className="doctor-list-container">
      <h2>Doctors List</h2>
      <div className="table-controls">
        <select className="records-per-page">
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>Records Per Page</span>
        <input type="text" className="search-bar" placeholder="Search..." />
        <button className="add-doctor-button">Add Doctor</button>
      </div>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor Name</th>
            <th>Designation</th>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>
                <img src={doctor.img} alt={doctor.name} className="doctor-img" />
                {doctor.name}
              </td>
              <td>{doctor.designation}</td>
              <td className={doctor.schedule.Sun === 'NA' ? 'na' : ''}>{doctor.schedule.Sun}</td>
              <td className={doctor.schedule.Mon === 'NA' ? 'na' : ''}>{doctor.schedule.Mon}</td>
              <td className={doctor.schedule.Tue === 'NA' ? 'na' : ''}>{doctor.schedule.Tue}</td>
              <td className={doctor.schedule.Wed === 'NA' ? 'na' : ''}>{doctor.schedule.Wed}</td>
              <td className={doctor.schedule.Thu === 'NA' ? 'na' : ''}>{doctor.schedule.Thu}</td>
              <td className={doctor.schedule.Fri === 'NA' ? 'na' : ''}>{doctor.schedule.Fri}</td>
              <td className={doctor.schedule.Sat === 'NA' ? 'na' : ''}>{doctor.schedule.Sat}</td>
              <td>
                <button className="action-button edit">✏️</button>
                <button className="action-button delete">🗑️</button>
                <button className="action-button view">👁️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
