import React from "react";
import "./Workshops.module.css";
import StarCanvas from "../landingPage/StarbackGround";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import dummyImage from "../../images/Naruto.jpg";
import { Link, useNavigate } from "react-router-dom";
import ComingSoon from "../../components/comingSoon/ComingSoon";
import arshGoyal from "../../images/arsh_goyal-removebg-preview.png";

const Workshops = () => {
  const [activeCards, setActiveCards] = useState({});

  const toggleActive = (index) => {
    setActiveCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navigate = useNavigate();

  return (
    <>
      <StarCanvas />
      <div className="workshops">
        {/* <Box style={{position:"relative",zIndex:"25"}}>
          <div class="wrapper">
            {workshops.map((workshop, index) => {
              return (
                <div
                  class="card"
                  key={index}
                  className={`card ${activeCards[index] ? "active" : ""}`}
                  onClick={() => toggleActive(index)}
                >
                  <img src={dummyImage} style={{margin:"5%"}} />
                  <h2>{workshop}</h2>
                  <Button 
                    variant="contained"
                    sx={{
                      backgroundColor: "#9867c5",
                      "&:hover": {
                        backgroundColor: "#9867c5",
                      },
                      "&:focus": {
                        backgroundColor: "#9867c5",
                      },
                      "&:active": {
                        backgroundColor: "#9867c5",
                      },  
                      zIndex:"24"
                    }}
                  >
                    <Link to={`/wdetail`}>
                    Explore
                    </Link>
                  </Button>
                  <p>welcome to workshop.</p>
                </div>
              );
            })}
          </div>
        </Box> */}
        {/* <div style={{position:"relative", zIndex:"10"}}> 
        <ComingSoon/>
      </div> */}

{/* 
        <div class="container">
          <div class="wrapper">
            <div class="banner-image"> </div>
            <h1> Toyota Supra</h1>
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
            </p>
          </div>
          <div class="button-wrapper">
            <button class="btn outline">DETAILS</button>
            <button class="btn fill">BUY NOW</button>
          </div>
        </div> */}
        <div>
          <ComingSoon/>
        </div>
      </div>
    </>
  );
};

export default Workshops;
