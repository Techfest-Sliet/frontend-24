import React from "react";
import "./Domains.css";
import StarCanvas from "../landingPage/StarbackGround";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VentureVault from "../../utils/DOMAIN_LOGOS/VentureVault.png";
import axios from "axios";
import { baseUrl } from "../../API/Api";

const Domains = ({ domains }) => {
  const [activeCards, setActiveCards] = useState({});
  const [click, setClick] = useState(false);

  const toggleActive = (index) => {
    setActiveCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const [domainDetails, setDomainDetails] = useState([]);
  
  useEffect(() => {
    const getAllDomains = async () => {
      await axios
        .get(`${baseUrl}/domain/getAllDomains`)
        .then((result) => {
          console.log(result.data);
          console.log(typeof result.data);
          setDomainDetails(result.data);
          console.log("Domaindetails===>",domainDetails)
        })
        .catch(err => {
          console.log("err===>",err);
        })
    };
    getAllDomains();
  }, []);

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
                  key={domain._id}
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
                      color: "black",
                      background: "#00b4d8",
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
                      navigate(`/domains/${domainDetails[index].domainName}`);
                    }}
                  >
                    Explore
                  </Button>
                  <p>{domain.description}</p>
                </div>
              );
            })}
            <div
              class="card"
              // key={domain.id}
              className={`card ${activeCards[0] ? "active" : ""}`}
              onClick={() => toggleActive(0)}
            >
              <img
                src={VentureVault}
                alt={VentureVault}
                style={{ margin: "5%" }}
              />
              <h2>VENTURE VAULT</h2>
              <Button
                sx={{
                  color: "black",
                  background: "#00b4d8",
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
                  setClick(true);
                  // navigate(`/domains/${domain.id}`);
                }}
              >
                Explore
              </Button>
              {click && (
                <p style={{ color: "red" }}>
                  This section is under construction.
                </p>
              )}
              <p>Domain of Business</p>
            </div>
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
