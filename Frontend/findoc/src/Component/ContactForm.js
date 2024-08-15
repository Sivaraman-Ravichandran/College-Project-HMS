import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css"; // Assuming your CSS is in a file named ContactForm.css

const ContactForm = ({ name }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await axios.post("http://localhost:8080/send", formData);
      if (response.data === "Email Sent Successfully") {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="applyBox">
      <div className="dsu-form">
        <div className="frmBg">
          <h1>{name}</h1>
          <h4>Contact Us</h4>
        </div>
        <div className="contact_fild CLDGen_PrimaryFORM_Submit">
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formIDfid">
              <div className="contact-fild-box">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Enter Name*"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-fild-box">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Enter Email*"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-fild-box">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter Mobile Number*"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-fild-box text-center">
                <div className="form-group">
                  <p
                    style={{
                      lineHeight: "16px",
                      color: "#333",
                      fontSize: "11px",
                    }}
                  >
                    By proceeding ahead you expressly agree to {name} to contact
                    you via Whatsapp and other channels with suitable college
                    options.
                  </p>
                </div>
              </div>
              <div className="contact-fild-box text-center">
                <div className="form-group">
                  <div
                    className={`loading-message ${loading ? "show" : ""}`}
                    id="loadingMessage"
                  >
                    Sending your message, please wait...
                  </div>
                  <div
                    className={`success-message ${success ? "show" : ""}`}
                    id="successMessage"
                  >
                    Thank you for contacting us! Your message has been sent
                    successfully.
                  </div>
                  <div
                    className={`error-message ${error ? "show" : ""}`}
                    id="errorMessage"
                  >
                    Sorry, there was an error sending your message. Please try
                    again.
                  </div>
                  <button
                    className="btn btn_submit"
                    id="btnSubmit"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
