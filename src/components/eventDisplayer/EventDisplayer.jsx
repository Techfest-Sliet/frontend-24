import {
  Stack,
  Box,
  Typography,
  Button,
  Divider,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../API/api";
import axios from "axios";
import AuthContext from "../Auth/Auth";
import { ImCross } from "react-icons/im";
import { Menu, MenuItem, Modal } from "@mui/material";
import Error from "../Error/Error";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
// import Loader from "../Loader/loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "grey",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 5,
};

const EventDisplayer = () => {
  const authContext = useContext(AuthContext);
  const [variable, setVariable] = useState(1);
  const [eventDetails, setEventDetails] = useState([]);
  const [eventCoor, setEventCoor] = useState([]);
  const [error, setError] = useState("");
  const [teamDetails, setTeamDetails] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [eventParticipationType, setEventParticipationType] = useState("");
  const [modal, setModal] = useState(false);

  const { eventId } = useParams();

  const handleVariableSeting = () => {
    setVariable(2);
  };
  const handleResetVariable = () => {
    setVariable(1);
  };

  useEffect(() => {
    setIsLoading(true);
    const getEventById = () => {
      axios.get(`${baseUrl}/event/geteventbyid/${eventId}`).then((result) => {
        setIsLoading(false);
        setEventDetails(result.data.event);
        setEventCoor(result.data.event.studentCoordinator);
      });
    };

    const getProperTeam = async () => {
      await axios
        .get(`${baseUrl}/team/properteam`, {
          headers: {
            Authorization: "Bearer " + authContext.token,
          },
        })
        .then((result) => {
          setIsLoading(false);
            setTeams(result.data.teams);
        });
    };

    getEventById();
    getProperTeam();
  }, [authContext, authContext.login]);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  // Individual Registration
  async function registerEvent() {
    setAnchorEl(null);
    if (authContext.isUserLoggedIn === false) {
      navigate("/sign-in");
    }

    setIsLoading(true);
    await axios
      .post(
        `${baseUrl}/user/addevent`,
        {
          teamName: teamName,
          eventId: `${eventId}`,
          type: eventParticipationType,
        },
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      )
      .then((result) => {
        setIsLoading(false);
        Swal.fire({
          title: "Great!!",
          text: `${result.data.message}.`,
          icon: "success",
          confirmButtonColor: "skyblue",
        });
        navigate(`/user`);
      });
  }

  const isMobile = useMediaQuery("(max-width : 480px)");

  return (
    <>
      <StarCanvas />
      {/* {isLoading && <Loader />} */}
      {!error ? (
        <>
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
                marginBottom: isMobile && "4rem",
              }}
            >
              <div
                className="container-div"
                style={{
                  color: "white",
                  height: "100%",
                  width: isMobile ? "100%" : "86%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: isMobile ? "3rem 0 0 0" : "6rem 0 0 0",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "3rem",
                    fontFamily: "Orbitron",
                    fontWeight: "600",
                    marginTop: isMobile && "1rem",
                    marginBottom: isMobile && "2rem",
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
                    style={{
                      position: "relative",
                      top: isMobile ? "-1rem" : "4.5rem",
                      right: isMobile && "-2rem",
                      zIndex: "10",
                    }}
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
                    height: "65%",
                    width: isMobile ? "95%" : "75%",
                    backgroundColor: "#90e0ef34",
                    position: "relative",
                    clipPath: isMobile
                      ? "0 0, 0 100%, 100% 100%,100% 0"
                      : "polygon(0 0 ,45% 0 ,50% 8% ,100% 8% ,100% 86% , 95% 95% ,85% 95%, 80% 85% , 6% 85%, 0 75%)",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: isMobile ? "100%" : "75%",
                      height: isMobile ? "auto" : "65%",
                      padding: isMobile && "1rem",
                      zIndex: "15",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Stack
                      direction={isMobile ? "column" : "row"}
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
                          alt="eventLogo"
                          width={500}
                          height={250}
                          style={{
                            objectFit: "cover",
                            boxShadow: "4px 5px 4px  #030014",
                            display: isMobile ? "none" : "block",
                          }}
                        />
                      </Box>
                      <Box
                        style={{
                          width: "100%",
                          height: "65%",
                          zIndex: "20",
                        }}
                      >
                        <Typography
                          textAlign={"end"}
                          variant={"h3"}
                        ></Typography>
                        <Box
                          sx={{
                            width: "100%",
                            height: "128%",
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
                            flexDirection: isMobile && "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "1.2rem",
                          }}
                        >
                          <a href={eventDetails.driveLink} target="main">
                            <Button>Problem Statement</Button>
                          </a>
                          <Box
                            display={"flex"}
                            flexDirection={isMobile && "column"}
                            width={isMobile ? "100%" : "35%"}
                            gap={1}
                          >
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
                              <MenuItem
                                onClick={() => {
                                  setModal(true);
                                  handleClose();
                                  setEventParticipationType("Individual");
                                }}
                              >
                                Join as Individual
                              </MenuItem>
                              {modal && (
                                <>
                                  <Modal
                                    open={modal}
                                    onClose={() => {
                                      setModal(false);
                                    }}
                                    aria-labelledby="child-modal-title"
                                    aria-describedby="child-modal-description"
                                  >
                                    <Box sx={style}>
                                      <TextField
                                        id="outlined-basic"
                                        label="Your Name"
                                        variant="outlined"
                                        onChange={(e) => {
                                          setTeamName(e.target.value);
                                        }}
                                      />
                                      <Button
                                        variant="contained"
                                        style={{
                                          display: "flex",
                                          marginLeft: "auto",
                                        }}
                                        onClick={() => registerEvent()}
                                      >
                                        OK
                                      </Button>
                                    </Box>
                                  </Modal>
                                </>
                              )}
                              {/* {eventDetails.eventParticipationType !== */}
                              {/* "Individual" && ( */}
                              <MenuItem
                                onClick={() => {
                                  setTeamDetails(true);
                                  handleClose();
                                  setEventParticipationType("team");
                                }}
                              >
                                Join as Team
                              </MenuItem>
                              {/* )} */}
                            </Menu>
                            {teamDetails && (
                              <>
                                <Modal
                                  open={teamDetails}
                                  onClose={() => {
                                    setTeamDetails(false);
                                  }}
                                  aria-labelledby="child-modal-title"
                                  aria-describedby="child-modal-description"
                                >
                                  <Box sx={style}>
                                    <Typography>
                                      Choose from your existing Team(s).
                                    </Typography>
                                    <select
                                      value={teamName}
                                      style={{ width: "40%" }}
                                      onChange={(e) => {
                                        setTeamName(e.target.value);
                                      }}
                                    >
                                      {teams &&
                                        teams.map((team) => {
                                          return (
                                            <>
                                              <option value={team.teamName}>
                                                {team.teamName}
                                              </option>
                                            </>
                                          );
                                        })}
                                    </select>
                                    <Button
                                      variant="contained"
                                      style={{
                                        display: "flex",
                                        marginLeft: "auto",
                                      }}
                                      onClick={() => {
                                        registerEvent();
                                        navigate(`/user`);
                                      }}
                                    >
                                      OK
                                    </Button>

                                    <Divider
                                      style={{
                                        marginTop: "10%",
                                        marginBottom: "10%",
                                      }}
                                    >
                                      <Typography style={{ color: "darkgrey" }}>
                                        OR
                                      </Typography>
                                    </Divider>
                                    <Typography>Add Your Team</Typography>
                                    <Link to="/addteam">
                                      <Button
                                        variant="contained"
                                        sx={{ margin: "3%" }}
                                      >
                                        Add Team
                                      </Button>
                                    </Link>
                                  </Box>
                                </Modal>
                              </>
                            )}
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
                marginBottom: isMobile && "4rem",
              }}
            >
              <div
                className="container-div"
                style={{
                  color: "white",
                  height: "90%",
                  width: isMobile ? "100%" : "86%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: isMobile ? "3rem 0 0 0" : "6rem 0 0 0",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "3rem",
                    fontFamily: "Orbitron",
                    fontWeight: "600",
                    marginBottom: isMobile && "0rem",
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
                    style={{
                      postion: "relative",
                      top: isMobile ? "3rem" : "4.5rem",
                      right: isMobile && "-2rem",
                      zIndex: "10",
                    }}
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
                    width: isMobile ? "95%" : "75%",

                    backgroundColor: "#90e0ef34",
                    position: "relative",

                    clipPath: isMobile
                      ? "0 0, 0 100%, 100% 100%,100% 0"
                      : "polygon(0 0 ,45% 0 ,50% 8% ,100% 8% ,100% 86% , 95% 95% ,85% 95%, 80% 85% , 6% 85%, 0 75%)",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: isMobile ? "100%" : "75%",
                      height: isMobile ? "100%" : "65%",
                      padding: isMobile && "1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Stack
                      direction={"column"}
                      style={{
                        width: "100%",
                        height: "90%",
                        gap: "2rem",
                      }}
                    >
                      <Box
                        height={"85%"}
                        width={"100%"}
                        padding={".4rem"}
                        paddingTop={".8rem"}
                        borderRadius={".4rem"}
                      >
                        <Typography variant="h4"> Contact Us </Typography>
                        &nbsp;
                        <div
                          style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                          }}
                        >
                          {eventCoor.map((coordinator, index) => {
                            return (
                              <Box key={coordinator._id}>
                                <Typography
                                  variant="h5"
                                  style={{
                                    color: "white",
                                    fontFamily: "sans-serif",
                                    marginRight: "1.5rem",
                                  }}
                                >
                                  {coordinator.coordinatorName}
                                </Typography>
                                <Typography
                                  variant="h6"
                                  style={{
                                    color: "white",
                                    fontFamily: "sans-serif",
                                    marginRight: "1.5rem",
                                  }}
                                >
                                  {coordinator.coordinatorEmail}
                                </Typography>
                                <Typography
                                  variant=""
                                  style={{
                                    color: "white",
                                    fontFamily: "sans-serif",
                                    marginRight: "1.5rem",
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
                        }}
                      >
                        <a href={eventDetails.driveLink} target="main">
                          <Button>Problem Statement</Button>
                        </a>
                        <Box display={"flex"} gap={1}>
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
      ) : (
        <>
          <Error />
        </>
      )}
    </>
  );
};

export default EventDisplayer;
