import React from "react";
import "./Arambh.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import aarambhEvents from "../../utils/aarambh.js";
import arshGoyal from "../../images/arsh_goyal-removebg-preview.png";
import { Typography } from "@mui/material";

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
          <h1 style={{ fontSize: "4rem", color: "#90E0EF" }}>AARAMBH</h1>
          <p style={{ padding: "5px 10rem", fontSize: "1.5rem" }}>
            Great things aren't just there, there's a sweet beginning that will
            finally leads to the grand scheme of events. And so we bring you
            sweet starting events - Arambh. Here you'll find the prefest events
            that will make get you pull up your socks.
          </p>
        </div>

        {/* <div className="specialCard">
          <Typography
            style={{
              positon: "relative",
              top: "10%",
              fontSize: 40,
              color: "white",
              fontWeight: "800",
              textShadow: "2px 2px red",
            }}
          >
            लक्ष्य
          </Typography>
          <article>
            <figure>
              <img src={arshGoyal} alt="" />
            </figure>
            <h2>Arsh Goyal</h2>
            <p>
              Samsung | LinkedIn Top Voice ‘24 | Ex- ISRO | Gold Medalist - NIT
            </p>
            <p>Jalandhar | Educator - Unacademy | CodeChef | 150k+ YouTube &</p>
            <p> Instagram</p>
            <br/>
            <section className="date" style={{display:"flex"}}>
              <Typography style={{fontWeight:800}}>Date:</Typography>
              <Typography>&nbsp;6<sup>th</sup> March 2024</Typography>
            </section>
            <br/>
            <section className="venue" style={{display:"flex"}}>
              <Typography style={{fontWeight:800}}>Venue:</Typography>
              <Typography>&nbsp;Main Auditorium</Typography>
            </section>
          </article>
          <button className="arambh__button" value="next" type="button">
            Register
          </button>
        </div> */}

        {aarambhEvents.map((item) => {
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
