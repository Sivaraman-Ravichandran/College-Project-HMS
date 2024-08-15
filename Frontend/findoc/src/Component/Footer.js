import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us__section">
                <h3>Connect With Me</h3>
                <p>Maa Live Events</p>
                <p>Jubilee Hills, Hyderabad</p>
                <p>Phone</p>
                <p>📱 +91 99890 70797</p>
                <p>📱 +91 70954 99997</p>
                <p>Email</p>
                <p>📧 maaevents999@gmail.com</p>
            </div>
            <div className="about-us__section">
                <h3>Services</h3>
                <ul>
                    <li>Live Surgery's</li>
                    <li>Social Media Live Streaming</li>
                    <li>Multi Camera Live</li>
                    <li>Roadshow Live Streaming</li>
                    <li>Corporate Events</li>
                </ul>
            </div>
            <div className="about-us__section">
                <h3>Our Locations</h3>
                <ul>
                    <li>Hyderabad</li>
                    <li>Vizag</li>
                    <li>Vijayawada</li>
                    <li>Guntur & Tenali</li>
                    <li>Bhimavaram</li>
                    <li>Pan India</li>
                </ul>
            </div>
            <div className="about-us__section">
                <h3>Social Connection</h3>
                <p>Don't miss a thing! Receive daily news. You should connect social area for any proper updates anytime.</p>
                <div className="social-icons">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaYoutube />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;