import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const UserAuth = ({ setIsAuthenticated }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setForm({ email: "", password: "" });
    setErrors({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let errors = {};
    if (!form.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }
    if (!form.password) {
      errors.password = "Password is required";
      valid = false;
    }
    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        if (isRegister) {
          const response = await axios.post(
            "http://localhost:8080/saveUser",
            form
          );
          setIsRegister(false);
          console.log(response.data);
          setForm({ email: "", password: "" });
          setErrors({ email: "", password: "" });
        } else {
          const response = await axios.post("http://localhost:8080/login", {
            email: form.email,
            password: form.password,
          });

          console.log(response.data);
          localStorage.setItem("isAuthenticated", "true");
          if (form.email.endsWith("@gmail.com")) {
            navigate("/home");
          } else if (form.email.endsWith("@admin.com")||(form.email.endsWith("@skcet.ac.in"))) {
            navigate("/dashboard");
          } else {
            alert("Unauthorized email domain");
          }
        }
      } catch (error) {
        console.error("Error during authentication", error);
        if (error.response && error.response.data) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: error.response.data.message || "Invalid credentials",
            password: error.response.data.message || "Invalid credentials",
          }));
          alert("Invalid credentials");
        }
      }
    }
  };

  return (
    <div className="user-auth-wrapper">
      <div className="user-auth-container">
        <div className="user-auth-image-section"></div>
        <div className="user-auth-form-section">
          <form onSubmit={handleSubmit} className="user-auth-form-container">
            <h1 className="user-auth-title">
              {isRegister ? "Register" : "Login"}
            </h1>
            <div className="user-auth-input-group">
              <label className="user-auth-label">
                Email:
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="user-auth-input"
                />
              </label>
              {errors.email && (
                <p className="user-auth-error">{errors.email}</p>
              )}
            </div>
            <div className="user-auth-input-group">
              <label className="user-auth-label">
                Password:
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="user-auth-input"
                />
              </label>
              {errors.password && (
                <p className="user-auth-error">{errors.password}</p>
              )}
            </div>
            <button type="submit" className="user-auth-submit-button">
              {isRegister ? "Register" : "Login"}
            </button>
            <button
              type="button"
              onClick={toggleMode}
              className="user-auth-toggle-button"
            >
              {isRegister
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
