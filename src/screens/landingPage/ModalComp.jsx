import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Modal, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaMeta } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../constants";
import { saveAs } from "file-saver";

const ModalComp = ({ closet, handleClose, handleOpen }) => {
  // const [open,setOpen] = useState(false);
  // const handleClose=()=>setOpen((value)=>!value)
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  //for mobile view
  const [fontSize, setFontSize] = useState(4.5);
  useEffect(function footerIcon() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 440) {
      setFontSize(3);
    }
  }, []);

  const downloadPdf = () => {
    const pdfUrl = "TF'24Brochure.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "techFEST'24 Brochure.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      hidden={"hidden"}
      variants={slideInFromBottom(0.5)}
      style={{ width: "100%", height: "100vh" }}
      onClick={handleClose}
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
              width={{ xs: "100%", lg: "90%" }}
              height={{ xs: "80%", lg: "100%" }}
              direction="row"
              spacing={{ xs: 0, sm: 0, lg: 2 }}
              justifyContent="space-around"
              // justifyContent={{xs:"space-between", lg:"space-around" }}
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
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link to="#">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Shows
                    </Button>
                  </Link>
                  <Link to="/workshops">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Workshops
                    </Button>
                  </Link>
                  <Link to="/domains">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Domains
                    </Button>
                  </Link>
                  <Link to="#">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      TechExpo
                    </Button>
                  </Link>
                  <Link to="/sponsor">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Sponsors
                    </Button>
                  </Link>
                  <Link to="/gallery">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Gallery
                    </Button>
                  </Link>
                  <Link to="/aboutus">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      About Us
                    </Button>
                  </Link>
                </Box>
              </Box>
              <Box
                width={{ xs: "20%", lg: "80%" }}
                height={{ xs: "110%", lg: "100%" }}
                sx={{
                  // border: "1px solid red",
                  // height: "100%",
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
                        fontWeight: "800",
                      }}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Box
                    marginTop={{ xs: "20%" }}
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
                    <a
                      href="https://www.instagram.com/techfestsliet_/"
                      target="main"
                    >
                      <FaInstagram color="white" fontSize={fontSize + "rem"} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/techfest-sliet/"
                      target="main"
                    >
                      <FaLinkedin color="white" fontSize={fontSize + "rem"} />
                    </a>
                    <a href="https://twitter.com/techFEST_SLIET" target="main">
                      <FaXTwitter color="white" fontSize={fontSize + "rem"} />
                    </a>
                    <a
                      href="https://www.youtube.com/@techfestslietofficial"
                      target="main"
                    >
                      <FaYoutube color="white" fontSize={fontSize + "rem"} />
                    </a>
                    <a href="#" target="main">
                      <FaMeta color="white" fontSize={fontSize + "rem"} />
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
                    onClick={downloadPdf}
                  >
                    Brochure
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
                  <Link to="#">
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
                  <Link to="/faq">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      FAQ
                    </Button>
                  </Link>
                  <Link to="/ourteam">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Our Team
                    </Button>
                  </Link>
                  <Link to="#">
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
                  <Link to="#">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Exhibition
                    </Button>
                  </Link>
                  <Link to="#">
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
                  <Link to="#">
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
                  <Link to="#">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Campus Ambassador Portal
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Stack>
            <Box
              paddingTop={{ xs: "5rem" }}
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
