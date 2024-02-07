import React, { useState } from "react";

import "./navbar.css";
import { Box, Button, Drawer, IconButton,Divider } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [mobileOpen,setMobileOpen]=useState(false);
  //handle menu click
  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen);
  }
  //menu drawer
  const drawer = (
  <Box onClick={handleDrawerToggle}  sx={{p:2}} >

        <div> 
        <Link to={"/"}>
          <img src="techfest24logo1.png" alt="" width="60%" />
        </Link>
        <Divider flexItem />
        </div> 
   
   <div className="mobile-view">
          <Link to="/workshops">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              WorkShops
            </Button>
          </Link>

          <Link to="/domains">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              Domains
            </Button>
          </Link>

          <Link to="/sponsor">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              Sponsor
            </Button>
          </Link>
          <Link to="/gallery">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              Gallery
            </Button>
          </Link>
          <Link to="contact-us">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              Contact Us
            </Button>
          </Link>
          <Link to="sign-in">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
            >
              SignIN
            </Button>
          </Link>
          </div>
 
  </Box>
  )
  return (
    <nav
      style={{
        width: "100%",
        height: "4.5rem",
        position: "fixed",
        top: "0",
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb( 24 109 196/ 0.5) ",
        backgroundColor: "#03001417",
        zIndex: 50,
        padding: "0 2.5rem",
        display: "flex",
        alignItems: "center",
        backdropFilter: "blur(15px)",
      }}
    >
      <Box
        className="navigationMenu"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
        // sx={{
        //   width:"100%",
        //   height:"100%",
        //   dispaly:{xs:"flex",md:"none"},
        //   alignItems:"center",
        //   justifyContent:"space-between",
        //   ga
        // }}
      >
        <Box
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            width: "15%",
          }}
        >
          {/* <img src="/festLogo.png" alt="festLogo" height="90%" style={{filter:"none",}} /> */}
          <Link
            to={"/"}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src="techfest24logo1.png"
              alt="logo"
              height="55%"
              style={{ filter: "none" }}
            />
          </Link>
          <div>{/* <Button>WorkShop</Button> */}</div>
        </Box>

        <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{margin:"2",display:{md:"none"}}} onClick={handleDrawerToggle}>
          <MenuIcon/>
        </IconButton>

       <Box
          // style={{
          //   height: "100%",
          //   display: "flex",
          //   // justifyContent: "end",
          //   alignItems: "center",
          //   gap: ".3rem",
          //   color: "white",
          // }}

          sx={{
            height: "100%",
            display: { lg: "flex",xs:"none" },
            justifyContent: "end",
            fontSiz: { sm: ".5rem" },
            alignItems: "center",
            gap: { lg: "1.6rem", md: "1.2rem", sm: "1.2rem" },
            color: "white",
          }}
          className="navbar"
          
        >
          <Link to="/workshops">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              WorkShops
            </Button>
          </Link>

          <Link to="/domains">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              Domains
            </Button>
          </Link>

          <Link to="/sponsor">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              Sponsor
            </Button>
          </Link>
          <Link to="/gallery">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              Gallery
            </Button>
          </Link>
          <Link to="contact-us">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
              className="nav-link nav-link-ltr"
            >
              Contact Us
            </Button>
          </Link>
          <Link to="sign-in">
            <Button
              style={{
                color: "white",
                fontWeight: "normal",
                fontFamily: "Droid Sans",
              }}
            >
              SignIN
            </Button>
          </Link>
        </Box>
      </Box>
      <Box>
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
           sx={{display:{xs:"block",sm:"block",lg:"none" },"& .MuiDrawer-paper":{boxSizing:"border-box",width:"100%"}}}
            PaperProps={{
                    sx: {
                      boxShadow:
                        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb( 24 109 196/ 0.5) ",
                        backgroundColor: "#03001417",
                    backdropFilter: "blur(15px)"
                  }}}>
           {drawer}
          </Drawer>
        </Box>
    </nav>
  );
};

export default NavBar;
