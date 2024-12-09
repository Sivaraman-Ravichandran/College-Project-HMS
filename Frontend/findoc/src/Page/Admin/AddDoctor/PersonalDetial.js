import React, { useState } from "react";
import { createDoctorProfile } from "../../../Api/Service"; // Import the Axios function

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    uniqueId: "",
    email: "",
    mobileNumber: "",
    maritalStatus: "",
    qualification: "",
    designation: "",
    bloodGroup: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Adjust doctorProfileData to include personal details
    const doctorProfileData = {
      ...formData,
      // Populate other fields as needed
    };

    try {
      await createDoctorProfile(doctorProfileData);
      alert("Personal Details created successfully!");
    } catch (error) {
      console.error("Error creating personal details:", error);
    }
  };

  return (
    <form className="add-doctor-form-container" onSubmit={handleSubmit}>
      <div className="add-doctor-form-group">
        <label>
          First Name <span>*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          required
        />
      </div>
      <div className="add-doctor-form-group">
        <label>
          Last Name <span>*</span>
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          required
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter Age"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Enter Gender"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Unique ID</label>
        <input
          type="text"
          name="uniqueId"
          value={formData.uniqueId}
          onChange={handleChange}
          placeholder="Enter Unique ID"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>
          Email <span>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          required
        />
      </div>
      <div className="add-doctor-form-group">
        <label>
          Mobile Number <span>*</span>
        </label>
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Enter Mobile Number"
          required
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Marital Status</label>
        <input
          type="text"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          placeholder="Enter Marital Status"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Qualification</label>
        <input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          placeholder="Enter Qualification"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Designation</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Enter Designation"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Blood Group</label>
        <input
          type="text"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          placeholder="Enter Blood Group"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter Address"
        ></textarea>
      </div>
      <div className="add-doctor-form-group">
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter Country"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter State"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter City"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Enter Postal Code"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>
          Profile Image URL (Bimg) <span>*</span>
        </label>
        <input
          type="text"
          name="Bimg"
          value={formData.Bimg}
          onChange={handleChange}
          placeholder="Enter Profile Image URL"
          required
        />
      </div>
      <div className="add-doctor-form-group">
        <label>
          Doctor Name (Dname) <span>*</span>
        </label>
        <input
          type="text"
          name="Dname"
          value={formData.Dname}
          onChange={handleChange}
          placeholder="Enter Doctor Name"
          required
        />
      </div>
      <div className="add-doctor-form-group">
        <label>
          Speciality <span>*</span>
        </label>
        <input
          type="text"
          name="Speciality"
          value={formData.Speciality}
          onChange={handleChange}
          placeholder="Enter Speciality"
          required
        />
      </div>
      <div className="add-doctor-form-group">
        <label>
          Location <span>*</span>
        </label>
        <input
          type="text"
          name="Location"
          value={formData.Location}
          onChange={handleChange}
          placeholder="Enter Location"
          required
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Status</label>
        <select name="Status" value={formData.Status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="full time">Full Time</option>
          <option value="part time">Part Time</option>
        </select>
      </div>
      <div className="add-doctor-form-group">
        <label>Consultation Fees</label>
        <input
          type="text"
          name="Fees"
          value={formData.Fees}
          onChange={handleChange}
          placeholder="Enter Fees (e.g., $150)"
        />
      </div>
      <div className="add-doctor-form-actions">
        <button type="button" className="add-doctor-cancel-button">
          Cancel
        </button>
        <button type="submit" className="add-doctor-submit-button">
          Create Doctor Profile
        </button>
      </div>
    </form>
  );
};

export default PersonalDetails;
