import React, { useContext, useState } from "react";
import "./navbar.css";
import Swal from "sweetalert2";
import {
    Box,
    Button,
    Drawer,
    IconButton,
    Divider,
    Tooltip,
    Avatar,
    MenuItem,
    Menu,
    Typography,
} from "@mui/material";
// import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ImCross } from "react-icons/im";

import { baseUrl } from "../../API/api.js";

const throwError = (e) => {
    if (!e.ok) {
        Swal.fire({
            title: 'Error!',
            text: `Unexpected Error: ${e.statusText}`,
            icon: 'error',
        })
    }
    return e;
}

const throwTextError = (e) => {
    Swal.fire({
        title: 'Error!',
        text: `Unexpected Error: ${e}`,
        icon: 'error',
    })
}

const NavBar = ({ userLogIn }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const [user, setUser] = useState(null);


    fetch(`${baseUrl}/profile`, { credentials: "include" }).then(throwError).then(v => v.json()).then(setUser)

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //handle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    //menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ p: 2 }}>
            <ImCross
                style={{
                    display: "inline",
                    float: "right",
                    position: "relative",
                    top: "1.5%",
                    color: "white",
                }}
                onClick={handleDrawerToggle}
            />
            <div>
                <Link to="/">
                    <img src="/techfest24logo1.png" alt="" width="60%" />
                </Link>
                <Divider flexItem />
            </div>

            <div className="mobile-view">
                <Link to="/arambh">
                    <Button
                        style={{
                            color: "white",
                            fontWeight: "normal",
                            fontFamily: "Droid Sans",
                        }}
                        className="nav-link nav-link-ltr"
                    >
                        Aarambh
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
                {/* <Link to="/gallery">
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
          </Link> */}
                <Link to="/ourteam">
                    <Button
                        style={{
                            color: "white",
                            fontWeight: "normal",
                            fontFamily: "Droid Sans",
                        }}
                        className="nav-link nav-link-ltr"
                    >
                        Our Team
                    </Button>
                </Link>

                <Button
                    style={{
                        color: "white",
                        fontWeight: "normal",
                        fontFamily: "Droid Sans",
                    }}
                >
                    {!user ? (
                        <Link to="/sign-in">
                            <Typography sx={{ color: "white", fontFamily: "Droid Sans" }}>
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
                                fetch(`${baseUrl}/auth/logout`, { credentials: "include" }).then(() => {
                                    window.location = "/";
                                })

                            }}
                        >
                            Logout
                        </MenuItem>
                    </Menu>
                </Button>
            </div>
        </Box>
    );
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
                        to="/"
                        style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            zIndex: "10000",
                        }}
                    >
                        <img
                            src="/techfest24logo1.png"
                            alt="logo"
                            height="55%"
                            style={{ filter: "none" }}
                        />
                    </Link>
                    <div>{/* <Button>WorkShop</Button> */}</div>
                </Box>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ margin: "2", display: { lg: "none" } }}
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
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
                        display: { lg: "flex", xs: "none" },
                        justifyContent: "end",
                        fontSize: { sm: ".5rem" },
                        alignItems: "center",
                        gap: { lg: "1.6rem", md: "1.2rem", sm: "1.2rem" },
                        color: "white",
                    }}
                    className="navbar"
                >
                    <Link to="/arambh">
                        <Button
                            style={{
                                color: "white",
                                fontWeight: "normal",
                                fontFamily: "Droid Sans",
                            }}
                            className="nav-link nav-link-ltr"
                        >
                            Aarambh
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
                    {/* <Link to="/gallery">
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
          </Link> */}
                    <Link to="ourteam">
                        <Button
                            style={{
                                color: "white",
                                fontWeight: "normal",
                                fontFamily: "Droid Sans",
                            }}
                            className="nav-link nav-link-ltr"
                        >
                            Our Team
                        </Button>
                    </Link>
                    <Link to="aboutus">
                        <Button
                            style={{
                                color: "white",
                                fontWeight: "normal",
                                fontFamily: "Droid Sans",
                            }}
                            className="nav-link nav-link-ltr"
                        >
                            About us
                        </Button>
                    </Link>
                    <Button
                        style={{
                            color: "white",
                            fontWeight: "normal",
                            fontFamily: "Droid Sans",
                        }}
                    >
                        {!user ? (
                            <Link to="/sign-in">
                                <Typography sx={{ color: "white", fontFamily: "Droid Sans" }}>
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
                                    fetch(`${baseUrl}/auth/logout`, { credentials: "include" }).then(() => {
                                        window.location = "/";
                                    })

                                }}
                            >
                                Logout
                            </MenuItem>
                        </Menu>
                    </Button>
                </Box>
            </Box>
            <Box>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{
                        display: { xs: "block", sm: "block", lg: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
                    }}
                    PaperProps={{
                        sx: {
                            boxShadow:
                                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb( 24 109 196/ 0.5) ",
                            backgroundColor: "#03001417",
                            backdropFilter: "blur(15px)",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </nav>
    );
};

export default NavBar;
