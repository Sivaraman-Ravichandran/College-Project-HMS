import React, { useState } from 'react';
import { createDoctorProfile } from '../../../Api/Service'; // Import the Axios function

const ProfileBio = () => {
  const [bio, setBio] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('bio', bio);
    if (photo) {
      formData.append('profilePhoto', photo);
    }

    // Create a DoctorProfileDTO object, you may need to adjust this according to your needs
    const doctorProfileData = {
      bio,
      profilePhoto: photo ? photo.name : '', // Assuming you handle file uploads separately
      // Populate other fields as needed
    };

    try {
      await createDoctorProfile(doctorProfileData);
      alert('Profile Bio created successfully!');
    } catch (error) {
      console.error('Error creating profile bio:', error);
    }
  };

  return (
    <form className="add-doctor-form-container" onSubmit={handleSubmit}>
      <div className="add-doctor-form-group">
        <label>Upload Profile</label>
        <div className="add-doctor-upload-photo">
          <input type="file" id="profile-photo-upload" onChange={handlePhotoChange} />
          <label htmlFor="profile-photo-upload" className="upload-photo-label">
            Click here to upload your photo.
          </label>
        </div>
      </div>
      <div className="add-doctor-form-group">
        <label>Write Bio</label>
        <textarea
          value={bio}
          onChange={handleBioChange}
          placeholder="Hello,\n\nMy name is Dr. David Kemrin. Write your bio here."
          rows="10"
          style={{ width: '100%', padding: '10px', fontSize: '16px', lineHeight: '1.5' }}
        />
      </div>
      <div className="add-doctor-form-actions">
        <button type="button" className="add-doctor-cancel-button">Cancel</button>
        <button type="submit" className="add-doctor-submit-button">Create Doctor Profile</button>
      </div>
    </form>
  );
};

export default ProfileBio;
