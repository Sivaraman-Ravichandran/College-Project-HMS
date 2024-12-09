import React, { useState } from "react";
import "./AddDoctor.css";
import axios from "axios";

function AddDoctor() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // State to handle success or error messages
  const [message, setMessage] = useState("");
  
  // State to handle loading state
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      // Make POST request to backend API
      const response = await axios.post("http://localhost:8080/create", formData);

      // Display success message
      setMessage("Doctor added successfully! An email has been sent.");
      setFormData({ name: "", email: "", phone: "" }); // Reset form
    } catch (error) {
      console.error("Error creating doctor:", error);
      setMessage("Failed to add doctor. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="add-doctor-container">
      {/* Tabs Section */}
      <div className="add-doctor-tabs">
        <button className="add-doctor-tab add-doctor-active">Personal Info</button>
      </div>

      {/* Form Section */}
      <form className="add-doctor-form-container" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="add-doctor-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter doctor's name"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={loading} // Disable input while loading
          />
        </div>

        {/* Email Field */}
        <div className="add-doctor-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={loading} // Disable input while loading
          />
        </div>

        {/* Phone Field */}
        <div className="add-doctor-form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleInputChange}
            required
            disabled={loading} // Disable input while loading
          />
        </div>

        {/* Form Actions */}
        <div className="add-doctor-form-actions">
          <button
            type="button"
            className="add-doctor-cancel-button"
            onClick={() => setFormData({ name: "", email: "", phone: "" })}
            disabled={loading} // Disable button while loading
          >
            Cancel
          </button>
          <button type="submit" className="add-doctor-submit-button" disabled={loading}>
            {loading ? "Creating..." : "Create"} {/* Change text while loading */}
          </button>
        </div>
      </form>

      {/* Display message */}
      {message && <p>{message}</p>}

      {/* Loading Spinner */}
      {loading && <div className="loading-spinner">Loading...</div>}
    </div>
  );
}

export default AddDoctor;
