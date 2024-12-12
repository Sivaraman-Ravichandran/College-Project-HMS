import React, { useEffect, useState } from "react";
import axios from "axios";
import "../DoctorDashboard.css";

const DoctorDashboard = ({ doctorId }) => {
  const [doctorData, setDoctorData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
    }
  };

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle change in editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  // Add a new duty
  const handleAddDuty = () => {
    setDoctorData((prevData) => ({
      ...prevData,
      duties: [...(prevData.duties || []), { workplace: "", worktime: "" }],
    }));
  };

  // Save updated doctor data
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("doctorData", JSON.stringify(doctorData));

      if (selectedImage) {
        formData.append("dimg", selectedImage);
      }
      console.log(doctorData);
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
    }
  };

  // Handle null or missing fields gracefully
  const handleNullValue = (value) => {
    return value ? value : "Not Provided";
  };

  if (!doctorData) return <div>Loading...</div>;

  return (
    <div className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>

      {/* Doctor Image */}
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
        <>
          {/* Editable Doctor Name */}
          <input
            name="dname"
            value={doctorData.dname || ""}
            onChange={handleChange}
            placeholder="Doctor Name"
          />
          <br />

          {/* Editable Doctor Specialty */}
          <input
            name="speciality"
            value={doctorData.speciality || ""}
            onChange={handleChange}
            placeholder="Speciality"
          />
          <br />

          {/* Editable Doctor Location */}
          <input
            name="location"
            value={doctorData.location || ""}
            onChange={handleChange}
            placeholder="Location"
          />
          <br />

          {/* Editable About */}
          <textarea
            name="about"
            value={doctorData.about || ""}
            onChange={handleChange}
            placeholder="About"
          />
          <br />

          {/* Editable Duties */}
          <div>
            <h3>Duties</h3>
            {doctorData.duties && doctorData.duties.length > 0 ? (
              doctorData.duties.map((duty, index) => (
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
                  <br />
                </div>
              ))
            ) : (
              <p>No duties available</p>
            )}
            <button onClick={handleAddDuty}>Add Duty</button>
          </div>

          {/* Editable Education */}
          <div>
            <h3>Education</h3>
            <input
              name="ehname"
              value={doctorData.ehname || ""}
              onChange={handleChange}
              placeholder="Education Institution"
            />
            <br />
            <input
              name="erole"
              value={doctorData.erole || ""}
              onChange={handleChange}
              placeholder="Role"
            />
            <br />
            <input
              name="eduration"
              value={doctorData.eduration || ""}
              onChange={handleChange}
              placeholder="Education Duration"
            />
            <br />
            <input
              name="elocation"
              value={doctorData.elocation || ""}
              onChange={handleChange}
              placeholder="Location"
            />
            <br />
          </div>

          {/* Image Upload */}
          <div>
            <h3>Upload New Image</h3>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          {/* Save Button */}
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {/* Display Doctor Information */}
          <h2>{doctorData.dname || "Doctor Name Not Provided"}</h2>
          <p>
            Speciality: {doctorData.speciality || "Speciality Not Provided"}
          </p>
          <p>Location: {doctorData.location || "Location Not Provided"}</p>
          <p>{doctorData.about || "About info not provided"}</p>
          <h3>Duties</h3>
          {doctorData.duties && doctorData.duties.length > 0 ? (
            doctorData.duties.map((duty, index) => (
              <div key={index}>
                <p>
                  {duty.workplace || "Workplace not provided"} -{" "}
                  {duty.worktime || "Working time not provided"}
                </p>
              </div>
            ))
          ) : (
            <p>No duties available</p>
          )}

          <h3>Education</h3>
          <p>{doctorData.ehname || "Institution not provided"}</p>
          <p>{doctorData.erole || "Role not provided"}</p>
          <p>{doctorData.eduration || "Duration not provided"}</p>
          <p>{doctorData.elocation || "Location not provided"}</p>

          {/* Edit Button */}
          <button onClick={handleEditToggle}>Edit</button>
        </>
      )}
    </div>
  );
};

export default DoctorDashboard;
