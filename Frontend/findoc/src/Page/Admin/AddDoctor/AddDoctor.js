import React, { useState } from 'react';
import PersonalDetails from './PersonalDetial';
import ProfileBio from './ProfileBio';
import Availability from './Availability';
import AccountDetails from './AccountDetial';
import './AddDoctor.css'; // Import your CSS file

const AddDoctor = () => {
  const [activeTab, setActiveTab] = useState('personalDetails');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personalDetails':
        return <PersonalDetails />;
      case 'profileAndBio':
        return <ProfileBio />;
      case 'availability':
        return <Availability />;
      case 'accountDetails':
        return <AccountDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="add-doctor-container">
      <div className="add-doctor-tabs">
        <button
          className={`add-doctor-tab ${activeTab === 'personalDetails' ? 'add-doctor-active' : ''}`}
          onClick={() => setActiveTab('personalDetails')}
        >
          Personal Details
        </button>
        <button
          className={`add-doctor-tab ${activeTab === 'profileAndBio' ? 'add-doctor-active' : ''}`}
          onClick={() => setActiveTab('profileAndBio')}
        >
          Profile and Bio
        </button>
        <button
          className={`add-doctor-tab ${activeTab === 'availability' ? 'add-doctor-active' : ''}`}
          onClick={() => setActiveTab('availability')}
        >
          Availability
        </button>
        <button
          className={`add-doctor-tab ${activeTab === 'accountDetails' ? 'add-doctor-active' : ''}`}
          onClick={() => setActiveTab('accountDetails')}
        >
          Account Details
        </button>
      </div>
      <div className="add-doctor-tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AddDoctor;
