import React from "react";
import "./Merchandise.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box } from "@mui/material";
import tshirt from "./images/t-shirt.jpg"
import { Link } from "react-router-dom";
// import { Typography } from "@mui/material";

const Merchandise = () => {
  return (
    <>
      <StarCanvas />
      <Box style={{ position: "relative", zIndex: "25" }}>
        <div className="merchandise_container">
          <h1 style={{ fontSize: "4rem", color: "#90E0EF" }}>Our Merchandise</h1>
          <p style={{ padding: "10px 10rem", fontSize: "1.5rem" }}>
          "Every great event needs a symbol, a mark that carries its spirit long after the lights dim and the applause fades. And that’s where our exclusive merchandise steps in. A perfect blend of style and pride, our merchandise isn’t just clothing or accessories—it’s a piece of the fest, a keepsake of your journey. From trendy tees to cool accessories, each item is designed to capture the essence of the fest, letting you carry a piece of this grand celebration wherever you go!"
          </p>
          <br />
          <figure>
              <img src={tshirt} alt="" width={380} />
            </figure>
            <br />
            <a href="https://forms.gle/LXGTnJNuAEtXN7cB8" className="merchandise_link">
            Buy Now
          </a>
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzWrBYTjcnszMNpdHPgR4-KHwieN7shPyog&s" alt="" />
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
          <button className="merchandise__button" value="next" type="button">
            Register
          </button>
        </div> */}

        {/* {amerchandiseEvents.map((item) => {
          return (
            <Card
              heading={item.heading}
              detail={item.detail}
              route={item.route}
              date={item.date}
            />
          );
        })} */}
      </Box>
    </>
  );
};
export default Merchandise;
