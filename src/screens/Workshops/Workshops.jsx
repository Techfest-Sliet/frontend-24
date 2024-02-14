import React from "react";
import "./Workshops.css";
import StarCanvas from "../landingPage/StarbackGround";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import dummyImage from "../../images/Naruto.jpg";
import { Link, useNavigate } from "react-router-dom";
import ComingSoon from "../../components/comingSoon/ComingSoon";

const Workshops = () => {
  const [activeCards, setActiveCards] = useState({});

  const toggleActive = (index) => {
    setActiveCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navigate = useNavigate();

  const workshops = [
    "machine learning",
    "ethical hacking",
    "chatgpt",
    "web development",
    "machine learning",
    "ethical hacking",
    "chatgpt",
    "web development",
  ];

  return (
    <>
      <StarCanvas />
      {/* <Box style={{position:"relative",zIndex:"25"}}>
        <div className="workshops">
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
        </div>
      </Box> */}
      <div style={{position:"relative", zIndex:"10"}}> 
        <ComingSoon/>
      </div>
    </>
  );
};

export default Workshops;
