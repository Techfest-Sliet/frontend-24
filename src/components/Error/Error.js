import React from "react";
import error from "./../../assets/Error.png";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Typography, useMediaQuery } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const Error = () => {
  const isMobile = useMediaQuery("(max-width:450px)");
  return (
    <div>
      <StarCanvas />
      <div
        className="error"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6rem",
          position: "relative",
          top: "40%",
        }}
      >
        <TypeAnimation
          sequence={["Looks like Something Went Wrong !!😧"]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          repeat={0}
        />
      </div>
    </div>
  );
};

export default Error;
