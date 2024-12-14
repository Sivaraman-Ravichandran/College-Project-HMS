import React, { useEffect, useState } from "react";
import axios from "axios";
import "../DoctorDashboard.css";

const DoctorDashboard = ({ doctorId }) => {
  const [doctorData, setDoctorData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch doctor data on component mount
  useEffect(() => {
    if (doctorId) {
      fetchDoctorData();
    }
  }, [doctorId]);

  // Function to fetch doctor data
  const fetchDoctorData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/DoctorDetailById/${doctorId}`
      );
      setDoctorData(response.data);
    } catch (error) {
      console.error("Error fetching doctor data", error);
      setErrorMessage("Failed to load doctor data. Please try again.");
    }
  };

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setErrorMessage("");
  };

  // Handle change in editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle image and banner selection
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "image") setSelectedImage(file);
    if (type === "banner") setSelectedBanner(file);
  };

  // Add a new action or duty
  const handleAddItem = (field) => {
    setDoctorData((prevData) => ({
      ...prevData,
      [field]: [
        ...(prevData[field] || []),
        field === "duties" ? { workplace: "", worktime: "" } : "",
      ],
    }));
  };

  // Save updated doctor data
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("doctorData", JSON.stringify(doctorData));
      if (selectedImage) formData.append("dimg", selectedImage);
      if (selectedBanner) formData.append("bimg", selectedBanner);

      const response = await axios.put(
        `http://localhost:8080/doctorUpdate/${doctorId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      setIsEditing(false);
      alert("Doctor details updated successfully!");
    } catch (error) {
      console.error("Error updating doctor details", error);
      setErrorMessage("Failed to update doctor details. Please try again.");
    }
  };

  // Handle null or missing fields gracefully
  const handleNullValue = (value) => value || "Not Provided";

  if (!doctorData) return <div>Loading...</div>;

  return (
    <div className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="doctor-banner">
        <img
          src={
            selectedBanner
              ? URL.createObjectURL(selectedBanner)
              : doctorData.bimg
              ? `data:image/jpeg;base64,${handleNullValue(doctorData.bimg)}`
              : "https://via.placeholder.com/1200x300?text=Doctor+Banner"
          }
          alt="Doctor Banner"
          className="doctor-banner-image"
        />
      </div>
      <img
        src={
          selectedImage
            ? URL.createObjectURL(selectedImage)
            : `data:image/jpeg;base64,${handleNullValue(doctorData.dimg)}`
        }
        alt="Doctor"
        className="doctor-image"
      />

      {isEditing ? (
        <div className="edit-mode">
          <input
            name="dname"
            value={doctorData.dname || ""}
            onChange={handleChange}
            placeholder="Doctor Name"
          />
          <input
            name="speciality"
            value={doctorData.speciality || ""}
            onChange={handleChange}
            placeholder="Speciality"
          />
          <input
            name="location"
            value={doctorData.location || ""}
            onChange={handleChange}
            placeholder="Location"
          />
          <textarea
            name="about"
            value={doctorData.about || ""}
            onChange={handleChange}
            placeholder="About"
          />

          <div>
            <h3>Actions</h3>
            {doctorData.actions?.map((action, index) => (
              <input
                key={index}
                value={action || ""}
                onChange={(e) => {
                  const updatedActions = [...doctorData.actions];
                  updatedActions[index] = e.target.value;
                  setDoctorData((prevData) => ({
                    ...prevData,
                    actions: updatedActions,
                  }));
                }}
                placeholder="Action"
              />
            ))}
            <button onClick={() => handleAddItem("actions")}>Add Action</button>
          </div>

          <div>
            <h3>Duties</h3>
            {doctorData.duties?.map((duty, index) => (
              <div key={index}>
                <input
                  value={duty.workplace || ""}
                  onChange={(e) => {
                    const updatedDuties = [...doctorData.duties];
                    updatedDuties[index].workplace = e.target.value;
                    setDoctorData((prevData) => ({
                      ...prevData,
                      duties: updatedDuties,
                    }));
                  }}
                  placeholder="Workplace"
                />
                <input
                  value={duty.worktime || ""}
                  onChange={(e) => {
                    const updatedDuties = [...doctorData.duties];
                    updatedDuties[index].worktime = e.target.value;
                    setDoctorData((prevData) => ({
                      ...prevData,
                      duties: updatedDuties,
                    }));
                  }}
                  placeholder="Working Time"
                />
              </div>
            ))}
            <button onClick={() => handleAddItem("duties")}>Add Duty</button>
          </div>

          <div>
            <h3>Upload New Banner</h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "banner")}
            />
          </div>

          <div>
            <h3>Upload New Image</h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "image")}
            />
          </div>

          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{handleNullValue(doctorData.dname)}</h2>
          <p>Speciality: {handleNullValue(doctorData.speciality)}</p>
          <p>Location: {handleNullValue(doctorData.location)}</p>
          <p>{handleNullValue(doctorData.about)}</p>
          <h3>Actions</h3>
          {doctorData.actions?.map((action, index) => (
            <p key={index}>{handleNullValue(action)}</p>
          ))}
          <h3>Duties</h3>
          {doctorData.duties?.map((duty, index) => (
            <p key={index}>
              {handleNullValue(duty.workplace)} -{" "}
              {handleNullValue(duty.worktime)}
            </p>
          ))}
          <button onClick={handleEditToggle}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
