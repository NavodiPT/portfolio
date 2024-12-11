import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './home.css';
import Footer from '../components/Footer';

import profile1 from '../img/profile1.jpg'; // Import the profile image

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/about'); // Navigate to the About page
  };

  return (
    <div>
      <Header />
      <div className="home">
        <div className="home-content">
          {/* Left Side (Text Section) */}
          <div className="left-side">
            <div className="animated-container">
              <h1 className="typing-effect">
                Hi there! <br /> I'm Tharushika Navodi
              </h1>
              <button className="get-started-button" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
            <br/>  <br/>
            <p className="education-text">
              FRESH GRADUATE <br />
              <span className="subtext">
                BSc (Hons) in Information Technology Specializing in Software Engineering
              </span>
            </p>

          </div>

          {/* Right Side (Profile Image Section) */}
          <div className="right-side">
            <div className="profile-image-container">
              <img src={profile1} alt="Tharushika" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
