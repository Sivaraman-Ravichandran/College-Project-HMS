import axios from 'axios';

// Base URL for your API
const API_BASE_URL = 'http://localhost:8080/api/doctor-profiles';

// Get a doctor profile by ID
export const getDoctorProfileById = (uniqueId) => {
  return axios.get(`${API_BASE_URL}/${uniqueId}`);
};

// Get all doctor profiles
export const getAllDoctorProfiles = () => {
  return axios.get(API_BASE_URL);
};

// Create a new doctor profile
export const createDoctorProfile = (doctorProfileData) => {
  return axios.post(API_BASE_URL, doctorProfileData);
};

// Update a doctor profile by ID
export const updateDoctorProfile = (uniqueId, doctorProfileData) => {
  return axios.put(`${API_BASE_URL}/${uniqueId}`, doctorProfileData);
};

// Delete a doctor profile by ID
export const deleteDoctorProfile = (uniqueId) => {
  return axios.delete(`${API_BASE_URL}/${uniqueId}`);
};
