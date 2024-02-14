import React from "react";
import "./Domains.css";
import StarCanvas from "../landingPage/StarbackGround";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Domains = ({ domains }) => {
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
      <Box style={{ position: "relative", zIndex: "25" }}>
        <div className="domains">
          <div class="wrapper">
            {domains.map((domain, index) => {
              return (
                <div
                  class="card"
                  key={domain.id}
                  className={`card ${activeCards[index] ? "active" : ""}`}
                  onClick={() => toggleActive(index)}
                >
                  <img
                    src={domain.imagePath}
                    alt={domain.name}
                    style={{ margin: "5%" }}
                  />
                  <h2>{domain.name.toUpperCase()}</h2>
                  <Button
                  
                    sx={{
                      color:"black",
                      background: '#00b4d8',
                      "&:hover": {
                        backgroundColor: "#00b4d8",
                      },
                      "&:focus": {
                        backgroundColor: "#00b4d8",
                      },
                      "&:active": {
                        backgroundColor: "#00b4d8",
                      },
                    }}
                    onClick={() => {
                      navigate(`/domains/${domain.id}`);
                    }}
                  >
                    Explore
                  </Button>
                  <p>{domain.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Box>

      {/* <div style={{position:"relative", zIndex:"10"}}>
        <ComingSoon/>
      </div> */}
    </>
  );
};

export default Domains;
