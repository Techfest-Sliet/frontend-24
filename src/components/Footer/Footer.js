import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ModalComp from "../../screens/landingPage/ModalComp";
import { FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {
  const [closet, setCloset] = useState(false);
  const handleOpen = () => {
    setCloset(true);
  };
  const handleClose = () => {
    setCloset(false);
  };
  return (
    <>
      <Box
        style={{
          zIndex: "25",
          width: "100%",
          position: "fixed",
          bottom: "0",
          backgroundColor: "#03001417",
          zIndex: "50",
          padding: "0 2.5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            "2px 10px 15px -3px rgb(0 0 0 / 0.1), 2px 4px 6px -4px rgb(24 109 196/0.5)",
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
          <FaAngleDoubleUp size={"1.4rem"} color="white" />
        </Button>
      </Box>

      <ModalComp
        closet={closet}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default Footer;
