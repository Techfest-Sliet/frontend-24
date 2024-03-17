import { Stack, Box, Typography, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../API/Api";
import axios from "axios";
import AuthContext from "../Auth/Auth";
import { ImCross } from "react-icons/im";
import { Menu, MenuItem } from "@mui/material";
import Error from "../Error/Error";

const EventDisplayer = ({ onCancel }) => {
  const authContext = useContext(AuthContext);
  const [variable, setVariable] = useState(1);
  const [eventDetails, setEventDetails] = useState([]);
  const [eventCoor, setEventCoor] = useState([]);
  const [error, setError] = useState(false);

  const { eventId } = useParams();

  const handleVariableSeting = () => {
    setVariable(2);
  };
  const handleResetVariable = () => {
    setVariable(1);
  };

  useEffect(() => {
    const userId = authContext.userId;
    const getUserById = () => {
      axios
        .get(`${baseUrl}/user/getUserById/${userId}`)
        .then((result) => {
          if (
            result.status !== 200 ||
            (result.status !== 201 && result.data.isError)
          ) {
            authContext.logout();
            return result.status(208).json({
              title: "Auth Error",
              message: "Wrong user auth!",
            });
          }
        })
        .catch((err) => {
          setError(true);
          return err.status(208).json({
            title: "Auth Error",
            message: "Wrong user auth!",
          });
        });
    };

    const getEventById = () => {
      axios.get(`${baseUrl}/event/getEventById/${eventId}`).then((result) => {
        setEventDetails(result.data.event);
        setEventCoor(result.data.event.studentCoordinator);
      });
    };

    getEventById();
    getUserById();
  }, [authContext, authContext.login]);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  async function registerAsIndividual() {
    setAnchorEl(null);
    if (authContext.token === " ") {
      navigate("/sign-in");
    }
    await axios
      .post(
        `${baseUrl}/user/addevent`,
        {
          eventId: `${eventId}`,
          type: "Individual",
        },
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      )
      .then((result) => {
        console.log("Result Data===>", result.data);
        // navigate(`/user-dashboard`);
      });
  }
  async function registerAsTeam() {
    if (authContext.token === " ") {
      navigate("/sign-in");
    }
    await axios
      .post(
        `${baseUrl}/user/addevent`,
        {
          eventId: `${eventId}`,
          type: "team",
        },
        {
          headers: {
            Authorization:
              `Bearer ${authContext.token}` 
          },
        }
      )
      .then((result) => {
        console.log("Result Data===>", result.data);
        // navigate(`/user-dashboard`);
      });
  }

  return (
    <>
    {error && <Error/>}

      <StarCanvas />
      {variable === 1 ? (
        <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: "25",
          }}
        >
          <div
            className="container-div"
            style={{
              color: "white",
              height: "90%",
              width: "86%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "6rem 0 0 0",
            }}
          >
            <Typography
              sx={{
                fontSize: "3rem",
                fontFamily: "Orbitron",
                fontWeight: "600",
              }}
            >
              {eventDetails.eventName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "75%",
              }}
            >
              <Button
                variant=" "
                style={{ postion: "relative", top: "4.5rem", zIndex: "10" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ImCross />
              </Button>
            </Box>
            <div
              className="div1"
              style={{
                height: "115%",
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
                        height: "128%",
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
                        <Button variant="contained" onClick={handleMenu}>
                          Register
                        </Button>
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
                          sx={{
                            zIndex: "40",
                            boxShadow: "5x 5px 5px #030014",
                          }}
                        >
                          <MenuItem onClick={registerAsIndividual}>
                            Join as Individual
                          </MenuItem>
                          <MenuItem onClick={registerAsTeam}>
                            Join as Team
                          </MenuItem>
                        </Menu>
                        <Button
                          onClick={() => {
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
              height: "90%",
              width: "86%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "6rem 0 0 0",
            }}
          >
            <Typography
              sx={{
                fontSize: "3rem",
                fontFamily: "Orbitron",
                fontWeight: "600",
              }}
            >
              {eventDetails.eventName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "75%",
              }}
            >
              <Button
                variant=" "
                style={{ postion: "relative", top: "4.5rem", zIndex: "10" }}
                onClick={() => {
                  navigate(-1);
                }}
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
                    <Typography variant="h4"> Contact Us </Typography>
                    &nbsp;
                    <div style={{ display: "flex" }}>
                      {eventCoor.map((coordinator, index) => {
                        return (
                          <Box key={coordinator._id}>
                            <Typography
                              variant="h5"
                              style={{
                                color: "white",
                                fontFamily: "sans-serif",
                              }}
                            >
                              {coordinator.coordinatorName}
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                color: "white",
                                fontFamily: "sans-serif",
                              }}
                            >
                              {coordinator.coordinatorEmail}
                            </Typography>
                            <Typography
                              variant=""
                              style={{
                                color: "white",
                                fontFamily: "sans-serif",
                              }}
                            >
                              {coordinator.coordinatorPhone}
                            </Typography>
                          </Box>
                        );
                      })}
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
                      <Button variant="contained" onClick={handleMenu}>
                        Register
                      </Button>
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
                        <MenuItem onClick={registerAsIndividual}>
                          Join as Individual
                        </MenuItem>
                        <MenuItem onClick={registerAsTeam}>
                          Join as Team
                        </MenuItem>
                      </Menu>
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
    </>
  );
};

export default EventDisplayer;
