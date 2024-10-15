import React from 'react';
import "./inquiry.css"; // Update to your CSS file for the inquiry section
import StarCanvas from '../landingPage/StarbackGround';
const Enquiry = () => {
  return (
    <div>
      <StarCanvas />
      <div className="inquiry-us">
      <div className="inquiry-bg">
      <img className='inquiry-bg-img' src="aboutus.jpg" alt="" />
         <div className="inquiry-bg-container">
          <h1>Enquiry</h1>
          <div className="inquiry-logo-text-container">
          <img src="logo.png" alt="" />
          <div className="inquiry-text">
            <h2>Contact us</h2>
            <h3>If you have any questions or need further information, please feel free to reach out to us!</h3>
            <br />
        <h2>Core Coordinator:</h2>
          <h3><strong>Name:</strong> Rohit Raj</h3>
          <h3><strong>Email:</strong> 2140316@sliet.ac.in</h3>
          <h3><strong>Phone:</strong> (+91) 7339726300</h3>
          </div>
          </div>
         </div>
      </div>
    </div>
    </div>
  );
};

export default Enquiry;
