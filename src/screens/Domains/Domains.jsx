import React from "react";
import "./Domains.css";
import StarCanvas from "../landingPage/StarbackGround";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import dummyImage from "../../images/Naruto.jpg";

const Domains = () => {
  const [activeCards, setActiveCards] = useState({});

  const toggleActive = (index) => {
    setActiveCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const domains = [
    "PLEXUS",
    "ELECTRICA",
    "FOOD-O-CRATS",
    "MECHANICA",
    "CHEMICA",
    "ELECTRONICS",
    "GENESIS",
    "KERMIS",
    "ROBOZAR",
    "ATOMHEIMER",
    "KARAYARACHNA",
    "VENTUREVAULT",
  ];

  return (
    <>
      <StarCanvas />
      <Box style={{position:"relative",zIndex:"25"}}>
        <div className="domains">
          <div class="wrapper">
            {domains.map((domain, index) => {
              return (
                <div
                  class="card"
                  key={index}
                  className={`card ${activeCards[index] ? "active" : ""}`}
                  onClick={() => toggleActive(index)}
                >
                  <img src={dummyImage} style={{margin:"5%"}} />
                  <h2>{domain}</h2>
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
                    }}
                  >
                    Explore
                  </Button>
                  <p>welcome to workshop.</p>
                </div>
              );
            })}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Domains;
