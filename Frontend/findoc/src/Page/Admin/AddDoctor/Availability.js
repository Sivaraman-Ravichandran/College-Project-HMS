import React, { useState } from "react";
import { createDoctorProfile } from "../../../Api/Service"; // Import the Axios function

const Availability = () => {
  const [availability, setAvailability] = useState({});

  const handleChange = (day, type, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Adjust doctorProfileData to include availability
    const doctorProfileData = {
      availability,
      // Populate other fields as needed
    };

    try {
      await createDoctorProfile(doctorProfileData);
      alert("Availability created successfully!");
    } catch (error) {
      console.error("Error creating availability:", error);
    }
  };

  const renderDaySection = (day) => (
    <div className="add-doctor-form-group" key={day}>
      <label>{day}</label>
      <select onChange={(e) => handleChange(day, "from", e.target.value)}>
        <option value="">From</option>
        {/* Add options for time */}
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        {/* Add more time options as needed */}
      </select>
      <select onChange={(e) => handleChange(day, "to", e.target.value)}>
        <option value="">To</option>
        {/* Add options for time */}
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        {/* Add more time options as needed */}
      </select>
    </div>
  );

  return (
    <form className="add-doctor-form-container" onSubmit={handleSubmit}>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) =>
        renderDaySection(day)
      )}

      <div className="add-doctor-form-group">
        <label>Workplace</label>
        <input
          type="text"
          name="Workplace"
          // value={formData.Workplace || ""}
          onChange={(e) => handleChange("Workplace", e.target.value)}
          placeholder="Enter Workplace"
        />
      </div>
      <div className="add-doctor-form-group">
        <label>Working Time</label>
        <input
          type="text"
          name="WorkingTime"
          // value={formData.WorkingTime || ""}
          onChange={(e) => handleChange("WorkingTime", e.target.value)}
          placeholder="Enter Working Time (e.g., 10 AM - 4 PM)"
        />
      </div>
      <button type="button">Add Duty</button>

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

export default Availability;
