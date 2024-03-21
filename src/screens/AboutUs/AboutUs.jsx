import React from 'react'
import "./aboutUs.css"
import StarCanvas from '../landingPage/StarbackGround'

const AboutUs = () => {
  return (
    <div>
    <StarCanvas/>
    <div className="about-us">
      <div className="about-bg">
      <img className='about-bg-img' src="aboutus.jpg" alt="" />
         <div className="about-bg-container">
          <h1>ABOUT <span style={{color:"#aee4ed"}}>US</span></h1>
          <div className="about-logo-text-container">
          <img src="logo.png" alt="" />
          <div className="about-text">
            <h2>ABOUT SLIET</h2>
              <h5>Established in 1989, Sant Longowal Institute of Engineering and Technology (SLIET) embarked on a journey towards technical excellence since its inception. Institute is accredited with Grade A by NAAC. The institute awards its own Certificates, Diplomas, Undergraduate (NBA accredited) and Postgraduate degrees (approved by AICTE, New Delhi) as per multi-entry and multi-exit policy of NEP-2020. The institute has a sprawling area of 451 acres surrounded by lush green land. The campus presents a spectacle of harmony and natural beauty. SLIET provides an extensive platform through several clubs and societies for the personality development & upskilling of students.</h5>
            <h2>ABOUT TECHFEST</h2>
              <h5>techFEST'24 serves as a crucial platform, empowering the next generation of engineers to pioneer transformative innovations, positively impacting both society and the future of technological progress. techFEST'24 offers a diverse range of opportunities for students to showcase their talents and make a positive impact on the world. it is a platform for young engineers to come together, share ideas, learn from each other and work towards a common goal of creating a sustainable future</h5>
          </div>
          </div>
         </div>
      </div>
    </div>
      
    </div>
  )
}

export default AboutUs
