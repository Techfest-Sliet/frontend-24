import { Stack, Box, Typography, Button, Modal } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../API/Api";
import axios from "axios";
import AuthContext from "../Auth/Auth";
import eventsData from "../../utils/events";
import { ImCross } from "react-icons/im";
import { Menu, MenuItem } from "@mui/material";

const EventDisplayer = ({ onCancel }) => {
  const authContext = useContext(AuthContext);
  const [variable, setVariable] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [openEventDisplayer, setOpenEventDisplayer] = useState(false);
  const [eventDetails, setEventDetails] = useState([]);

  const { eventId } = useParams();

  const handleVariableSeting = () => {
    setVariable(2);
  };
  const handleResetVariable = () => {
    setVariable(1);
  };

  useEffect(() => {
    setIsLoading(true);
    // console.log("Authcontext==>", authContext);'
    const userId = authContext.userId;
    // console.log("userId ==> ", authContext.userId);
    const getUserById = () => {
      axios
        .get(`${baseUrl}/user/getUserById/${userId}`)
        .then((result) => {
          setIsLoading(false);
          if (
            result.status !== 200 ||
            (result.status !== 201 && result.data.isError)
          ) {
            console.log(result);
            authContext.logout();
            return result.status(208).json({
              title: "Auth Error",
              message: "Wrong user auth!",
            });
          }
        })
        .catch((err) => {
          return err.status(208).json({
            title: "Auth Error",
            message: "Wrong user auth!",
          });
        });
    };

    const getEventById = () => {
      axios.get(`${baseUrl}/event/event/${eventId}`).then((result) => {
        console.log(result);
        setEventDetails(result.data.event);
      });
    };

    getEventById();
    getUserById();
  }, [authContext, authContext.login]);

  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function registerEvent() {
    if (authContext.userId === " ") {
      navigate("/sign-in");
    }

    // await axios
    //   .post(
    //     `${baseUrl}/user/addevent/${eventId}`,
    //     { eventId: parseInt(eventId) },
    //     {
    //       // headers: {
    //       //   Authorization: `Bearer ${token}`, // Add your token here
    //       // },
    //     }
    //   )
    //   .then((result) => {
    //     console.log("Result Data===>", result.data);
    //     // navigate(`/user-dashboard`);
    //   });
  }

  return (
    <>
      {/* <StarCanvas /> */}

      {variable === 1 ? (
        <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "25",
            position: "relative",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="container-div"
            style={{
              color: "white",
              height: "75%",
              width: "86%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "6rem 0 0 0",
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", width: "75%" }}
            >
              <Button
                variant=" "
                style={{ postion: "relative", top: "4.5rem", zIndex: "10" }}
              >
                <ImCross />
              </Button>
            </Box>
            <div
              className="div1"
              style={{
                height: "95%",
                width: "75%",

                backgroundColor: "#90e0ef34",
                position: "relative",

                clipPath:
                  "polygon(0 0 ,45% 0 ,50% 8% ,100% 8% ,100% 86% , 95% 95% ,85% 95%, 80% 85% , 6% 85%, 0 75%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "75%",
                  height: "65%",
                  border: "1px spolid red ",
                  zIndex: "15",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction={"row"}
                  style={{
                    width: "100%",
                    height: "90%",
                    gap: "2rem",
                  }}
                >
                  <Box
                    width={"15%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <img
                      // className={Img}
                      // src={Img}
                      alt="eventLogo"
                      width={500}
                      height={250}
                      style={{
                        objectFit: "cover",
                        boxShadow: "4px 5px 4px  #030014",
                      }}
                    />
                  </Box>
                  <Box
                    style={{
                      width: "100%",
                      // border: "1px solid red",
                      height: "65%",
                      zIndex: "20",
                    }}
                  >
                    <Typography
                      textAlign={"end"}
                      variant={"h3"}
                      // paddingRight={"2.5rem"}
                    ></Typography>
                    <Box
                      sx={{
                        width: "100%",
                        height: "125%",
                        // border:"1px solid red",
                        overflowY: "auto",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          width: "100%",
                          height: "100%",
                          overflowY: "auto",
                          textAlign: "justify",
                        }}
                      >
                        {eventDetails.eventDescription}
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        width: "100%",
                        height: "12%",
                        zIndex: "30",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "1.2rem",

                        // border: "1px solid red",
                      }}
                    >
                      <a href={eventDetails.driveLink} target="_main">
                        <Button>Problem Statement</Button>
                      </a>
                      <Box display={"flex"} gap={1}>
                        <Button
                          variant="contained"
                          onClick={registerEvent}
                        >
                          Register
                        </Button>
                        {showOptions && (
                          <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={{ zIndex: "40" }}
                          >
                            <MenuItem onClick={handleClose}>
                              Join as Individual
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              Join as Team
                            </MenuItem>
                          </Menu>
                        )}
                        <Button
                          onClick={() => {
                            console.log(
                              "display the faculty advisor and domain coordinator"
                            );
                            handleVariableSeting();
                          }}
                        >
                          Contact Us
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </div>
            </div>
          </div>
        </Box>
      ) : variable === 2 ? (
        <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "25",
            position: "relative",
            // border: "1px solid red",
          }}
        >
          <div
            className="container-div"
            style={{
              color: "white",
              height: "75%",
              width: "86%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "6rem 0 0 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "75%",
              }}
            >
              <Button
                variant=" "
                style={{ postion: "relative", top: "4.5rem" }}
                onClick={onCancel}
              >
                <ImCross />
              </Button>
            </Box>
            <div
              className="div1"
              style={{
                height: "95%",
                width: "75%",

                backgroundColor: "#90e0ef34",
                position: "relative",

                clipPath:
                  "polygon(0 0 ,45% 0 ,50% 8% ,100% 8% ,100% 86% , 95% 95% ,85% 95%, 80% 85% , 6% 85%, 0 75%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "75%",
                  height: "65%",
                  // border: "1px spolid red ",
                  // zIndex: "15",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction={"column"}
                  style={{
                    // border: "1px solid red",
                    width: "100%",
                    height: "90%",
                    gap: "2rem",
                  }}
                >
                  <Box
                    height={"85%"}
                    width={"100%"}
                    // boxShadow={"2px 2px 12px #030014"}
                    padding={".4rem"}
                    paddingTop={".8rem"}
                    borderRadius={".4rem"}
                  >
                    <Typography variant="h4"> Contact Us</Typography>
                    <div style={{}}>
                      <p></p>
                    </div>
                  </Box>
                  <Box
                    style={{
                      width: "100%",
                      height: "12%",
                      zIndex: "30",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "1.2rem",

                      // border: "1px solid red",
                    }}
                  >
                    <a href={eventDetails.driveLink}>
                      <Button>Problem Statement</Button>
                    </a>
                    <Box display={"flex"} gap={1}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          setShowOptions(true);
                        }}
                      >
                        Register
                      </Button>
                      {showOptions && (
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>
                            Join as Individual
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Join as Team
                          </MenuItem>
                        </Menu>
                      )}
                      <Button
                        onClick={() => {
                          handleResetVariable();
                        }}
                      >
                        Back
                      </Button>
                    </Box>
                  </Box>
                </Stack>
              </div>
            </div>
          </div>
        </Box>
      ) : null}

      {/* <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "25",
            position: "relative",
            // border: "1px solid red",
          }}
        > */}
      {/* <EventDisplayer
      Img ={Img}
      heading = {"Head"}
      details = {"fkshd fdsfkjds fdskjfds fdsf"}  /> */}
      {/* </Box> */}
    </>
  );
};

export default EventDisplayer;
