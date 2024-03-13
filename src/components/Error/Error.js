import React from "react";
import error from "./../../assets/Error.png";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { useMediaQuery } from "@mui/material";

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
        <img
          src={error}
          alt="error"
          style={{ width: "40%", height: "50%", position:"relative", top: isMobile ? "30%" : "0%"}}
        />
      </div>
    </div>
  );
};

export default Error;
