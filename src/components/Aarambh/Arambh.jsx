import React from "react";
import "./Arambh.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import aarambhEvents from "../../utils/aarambh.js";

const Card = ({ heading, detail, route }) => {
  return (
    <>
      <div className="arambhCard">
        <h1>{heading}</h1>
        <p>{detail}</p>
        <button className="arambh__button" value="next" type="button">
          <Link to={route && `${route}`}>
            {heading === "Technical Movie Show" || heading === "Workshop"
              ? "Explore"
              : "Register"}
          </Link>
        </button>
      </div>
    </>
  );
};

const Arambh = () => {
  return (
    <>
      <StarCanvas />
      <Box style={{ position: "relative", zIndex: "25" }}>
        <div className="arambh_container">
          <h1 style={{ fontSize: "4rem", color: "#90E0EF" }}>AARMABH</h1>
          <p style={{ padding: "5px 10rem", fontSize: "1.5rem" }}>
            Great things aren't just there, there's a sweet beginning that will
            finally leads to the grand scheme of events. And so we bring you
            sweet starting events - Arambh. Here you'll find the prefest events
            that will make get you pull up your socks.
          </p>
        </div>
        {aarambhEvents.map((item, index) => {
          return (
            <Card
              heading={item.heading}
              detail={item.detail}
              route={item.route}
            />
          );
        })}
      </Box>
    </>
  );
};
export default Arambh;
