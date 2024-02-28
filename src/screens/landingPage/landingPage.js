import { Box, CardMedia, Button } from "@mui/material";

import StarCanvas from "./StarbackGround";

import "./landingPage.css";
import NavBar from "../../components/navbar/Navbar";

import Hero from "./Hero";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useState } from "react";

import ModalComp from "./ModalComp";

function App() {
  const [closet, setCloset] = useState(false);
  const handleOpen = () => {
    setCloset(true);
  };
  const handleClose = () => {
    setCloset(false);
  };

  const capsuleDiv = {};
  return (
    <>
      <StarCanvas />
      <Box
      className="landingPage"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          position: "relative",
          overflow:"hidden",
        }}
      >
        <CardMedia
          autoPlay
          muted
          loop
          component="video"
          className="videoheader"
          src="/blackhole.webm"
        />
        {/* <NavBar /> */}
        {/* <Box
          style={{
            overflowX: "hidden",
            width: "100%",
            height: "100vh",
            backgroundColor: "#030014",
            display: "flex",
            flexDirection: "row",
            spacing: "1.2rem",
          }}
        >
        
        
      </Box> */}
        {/* <Hero /> */}

        {/* <Box
          style={{
            width: "100%",
            height: "75%",
            zIndex: "20",
            marginBottom: ".5rem",
          }}
        ></Box> */}
        <Hero/>
        {/* <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            zIndex: "35",
            paddingBottom: ".6rem",
          }}
        >
          <Button
            variant="outlined"
            style={{
              width: "25%",
              height: "1.8rem",
              borderBottom: "none",
              padding: "1.2rem",
            }}
            onClick={handleOpen}
          >
            <FaAngleDoubleUp color="white" />
          </Button>
        </Box> */}
      </Box>
      <ModalComp
        
        closet={closet}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
}

export default App;
