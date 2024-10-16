import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Tooltip,
  Avatar,
  MenuItem,
  Menu,
  Typography,
  Modal,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaMeta } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../constants";
import { saveAs } from "file-saver";
import { baseUrl } from "../../API/api"

const ModalComp = ({ closet, handleClose, handleOpen, user }) => {
  // const [open,setOpen] = useState(false);
  // const handleClose=()=>setOpen((value)=>!value)
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
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
    const pdfUrl = "https://drive.google.com/file/d/1YVuaR-smOeyq8lQOL5luSUXdL6l6zqgt/view?usp=drivesdk";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "https://drive.google.com/file/d/1YVuaR-smOeyq8lQOL5luSUXdL6l6zqgt/view?usp=drivesdk";
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
                  {/* <Link to="/workshops">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Workshops
                    </Button>
                  </Link> */}
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
                  {!user ? (
                    <Link to="/sign-in">
                      <Typography
                        sx={{ color: "white", fontFamily: "Droid Sans" }}
                      >
                        SIGNIN
                      </Typography>
                    </Link>
                  ) : (
                    <Tooltip title="Profile">
                      <Button onClick={handleMenu}>
                        <Avatar alt="User" sx={{ height: 35 }} />
                      </Button>
                    </Tooltip>
                  )}
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "center",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/user");
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        fetch(`${baseUrl}/auth/logout`, {
                          credentials: "include",
                        }).then(() => {
                          window.location = "/";
                        });
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                  <Box
                    marginTop={{ xs: "20%" }}
                    style={{
                      height: "90%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
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
                    {/* <a href="https://twitter.com/techFEST_SLIET" target="main">
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
                    </a> */}

                    {/* {social.map((item, index) => (
                    <a href="#" key={index}>
                      <item />
                    </a>
                  ))} */}
                  </Box>

                  <a
  href="https://drive.google.com/uc?export=download&id=1YVuaR-smOeyq8lQOL5luSUXdL6l6zqgt"
  target="_blank" // Open in a new tab
  rel="noopener noreferrer" // Security best practice
>
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
    Brochure
  </Button>
</a>

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
                  {/* <Link to="#">
                    <Button
                      style={{
                        color: "white",
                        fontFamily: "Droid sans",
                        fontWeight: "800",
                      }}
                    >
                      Hospitality
                    </Button>
                  </Link> */}
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
                      Special Initiative
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
