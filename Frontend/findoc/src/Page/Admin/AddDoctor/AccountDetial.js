import React, { useState } from 'react';
import { createDoctorProfile } from '../../../Api/Service'; // Import the Axios function

const AccountDetails = () => {
  const [accountData, setAccountData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccountData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Adjust doctorProfileData to include account details
    const doctorProfileData = {
      ...accountData,
      // Populate other fields as needed
    };

    try {
      await createDoctorProfile(doctorProfileData);
      alert('Account details created successfully!');
    } catch (error) {
      console.error('Error creating account details:', error);
    }
  };

  return (
    <form className="add-doctor-form-container" onSubmit={handleSubmit}>
      <div className="add-doctor-form-group">
        <label>Username <span>*</span></label>
        <input type="text" name="username" value={accountData.username} onChange={handleChange} placeholder="Enter Username" required />
      </div>
      <div className="add-doctor-form-group">
        <label>Password <span>*</span></label>
        <input type="password" name="password" value={accountData.password} onChange={handleChange} placeholder="Enter Password" required />
      </div>
      <div className="add-doctor-form-group">
        <label>Confirm Password <span>*</span></label>
        <input type="password" name="confirmPassword" value={accountData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
      </div>
      <div className="add-doctor-form-actions">
        <button type="button" className="add-doctor-cancel-button">Cancel</button>
        <button type="submit" className="add-doctor-submit-button">Create Doctor Profile</button>
      </div>
    </form>
  );
};

export default AccountDetails;
