import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Modal, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaMeta } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../constants";
const ModalComp = ({ closet, handleClose, handleOpen }) => {
  // const [open,setOpen] = useState(false);
  // const handleClose=()=>setOpen((value)=>!value)
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };
  const social = [
    {
      twitter: "FaXTwitter",
      meta: "FaMeta",
      insta: "FaInstagram",
      youtube: "FaYoutube",
      linked: "FaLinkedin",
    },
  ];

  //for mobile view
  const [fontSize,setFontSize]=useState(4.5);
  useEffect( function footerIcon(){
    const screenWidth = window.innerWidth;
    if(screenWidth<440){
    setFontSize(3)
    }
  },[]);
  

  return (
    <motion.div
      hidden={"hidden"}
      variants={slideInFromBottom(0.5)}
      style={{ width: "100%", height: "100vh" }}
    >
      {/* <button onClick={handleClose}>clickme</button> */}
      <Modal
        open={closet}
        onClose={handleClose}
        onKeyDown={handleKeyDown}
        style={{ backdropFilter: "blur(5px)" }}
      >
        <>
          <Box
            style={{
              width: "100%",
              // border:"1px solid red",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Stack
              width="85%"
              height="90%"
              direction="row"
              spacing={2}
              justifyContent="space-around"
              // border="1px solid red"
            >
              <Box
                style={{
                  // border: "1px solid red",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "90%",
                    height: "90%",
                    border: "4px solid",
                    borderImage:
                      " linear-gradient(to right, #ffffff, #b7b4b2, #ccd0d4, #4d4c47) 1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: ".7rem 0",
                    gap: "1.3rem",
                  }}
                >
                  <Link to="/">
                    <Button
                      style={{ color: "white", fontFamily: "Droid sans" }}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link to="/shows">
                    <Button
                      style={{ color: "white", fontFamily: "Droid sans" }}
                    >
                      Shows
                    </Button>
                  </Link>
                  <Link to="/workshops">
                    <Button
                      style={{ color: "white", fontFamily: "Droid sans" }}
                    >
                      Workshops
                    </Button>
                  </Link>
                  <Link to="/domain">
                    <Button
                      style={{ color: "white", fontFamily: "Droid sans" }}
                    >
                      Domains
                    </Button>
                  </Link>
                  <Link to="/tech-expo">
                    <Button
                      style={{ color: "white", fontFamily: "Droid sans" }}
                    >
                      TechExpo
                    </Button>
                  </Link>
                  <Link to="/sponsors">
                    <Button
                      style={{ color: "white", fontFamily: "Droid sans" }}
                    >
                      Sponsors
                    </Button>
                  </Link>
                  <Link to="/gallery">
                    <Button
                      style={{ color: "white", fontFamily: "Droid sans" }}
                    >
                      Gallery
                    </Button>
                  </Link>
                  <Link to="/about-us">
                    <Button
                      style={{ color: "white", fontFamily: "Droid sans" }}
                    >
                      About Us
                    </Button>
                  </Link>
                </Box>
              </Box>
              <Box
                style={{
                  // border: "1px solid red",
                  height: "100%",
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack
                  style={{
                    height: "96%",
                    width: "99%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link to="/sign-in">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontSize: "20px",
                      }}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Box
                    style={{
                      height: "90%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.9rem",
                      // border: "1px solid red",
                    }}
                  >
                  
                  
                    <a href="#">
                      <FaInstagram color="white" fontSize={fontSize+"rem"} />
                    </a>
                    <a href="#">
                      <FaLinkedin color="white" fontSize={fontSize+"rem"} />
                    </a>
                    <a href="#">
                      <FaXTwitter color="white" fontSize={fontSize+"rem"} />
                    </a>
                    <a href="#">
                      <FaYoutube color="white" fontSize={fontSize+"rem"} />
                    </a>
                    <a href="#">
                      <FaMeta color="white" fontSize={fontSize+"rem"} />
                    </a>


                    {/* {social.map((item, index) => (
                    <a href="#" key={index}>
                      <item />
                    </a>
                  ))} */}
                  </Box>
                  <Button
                    variant="outlined"
                    style={{
                      color: "white",
                      fontFamily: "Droid sans",
                      backgroundColor: "transparent",
                      borderRadius: "15rem",
                      padding: "0.4rem 1.6rem",
                    }}
                  >
                    Broucher
                  </Button>
                </Stack>
              </Box>
              <Box
                style={{
                  // border: "1px solid red",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "90%",
                    height: "90%",
                    border: "4px solid",
                    borderImage:
                      " linear-gradient(to left, #ffffff, #b7b4b2, #ccd0d4, #4d4c47) 1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: ".7rem 0",
                    gap: "1.3rem",
                  }}
                >
                  <Link to="/enquiry">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Enquiry
                    </Button>
                  </Link>
                  <Link to="/contact-us">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/hospitality">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Hospitality
                    </Button>
                  </Link>
                  <Link to="/exibition">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Exibition
                    </Button>
                  </Link>
                  <Link to="/mechandise">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Merchandise
                    </Button>
                  </Link>
                  <Link to="/special-initiative">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Special Initiative
                    </Button>
                  </Link>
                  <Link to="/ca-portal">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      CA Portal
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Stack>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <Button
                variant="outlined"
                style={{
                  width: "25%",
                  height: "1.6rem",
                  borderBottom: "none",
                  padding: "1.2rem",
                }}
                onClick={handleClose}
              >
                <GrClose size={"12px"} color="white" />
              </Button>
            </Box>
          </Box>
        </>
      </Modal>
    </motion.div>
  );
};

export default ModalComp;
