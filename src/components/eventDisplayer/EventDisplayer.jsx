import { Stack, Box, Typography, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../API/Api";
import axios from "axios";
import AuthContext from "../Auth/Auth";
import { ImCross } from "react-icons/im";
import { Menu, MenuItem, Modal, TextField, Tooltip } from "@mui/material";
import Error from "../Error/Error";
import Swal from "sweetalert2";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";

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
  const [error, setError] = useState(false);
  const [teamDetails, setTeamDetails] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamMemberEmails, setTeamMemberEmails] = useState([" "]);

  const { eventId } = useParams();
  const token = localStorage.getItem("jwtToken");

  const handleVariableSeting = () => {
    setVariable(2);
  };
  const handleResetVariable = () => {
    setVariable(1);
  };

  useEffect(() => {
    const getUserById = () => {
      console.log("Token===>", token);
      axios
        .get(`${baseUrl}/user/getUserById`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          console.log("Getuserby Id ==> ", result.data);
        })
        .catch((err) => {
          setError(true);
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

  // Individual Registration
  async function registerIndividualEvent() {
    setAnchorEl(null);
    if (authContext.isUserLoggedIn === false) {
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
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log("Result Data===>", result.data);
        Swal.fire({
          title: "Great!!",
          text: `${result.data.message}`,
          icon: "success",
          confirmButtonColor: "skyblue",
        });
        navigate(`/user`);
      });
  }

  // Team Registration

  const handleMemberEmail = (index, e) => {
    const newEmails = [...teamMemberEmails];
    newEmails[index] = e.target.value;
    setTeamMemberEmails(newEmails);
  };

  const addTeamMember = () => {
    setTeamMemberEmails([...teamMemberEmails, " "]);
  };

  const removeMember = (index) => {
    const newEmails = [...teamMemberEmails];
    newEmails.splice(index, 1);
    setTeamMemberEmails(newEmails);
  };

  async function registerTeamEvent() {
    if (authContext.isUserLoggedIn === false) {
      navigate("/sign-in");
    }

    const createTeam = async () => {
      await axios
        .post(
          `${baseUrl}/team/create`,
          {
            teamName: teamName,
            members: teamMemberEmails,
          },
          {
            headers: {
              Authorization: `Bearer ${authContext.token}`,
            },
          }
        )
        .then((result) => {
          if (result.data.message === "team created") {
            Swal.fire({
              title: "Great!!",
              text: `Your team is succesfully created`,
              icon: "success",
              confirmButtonColor: "skyblue",
            });
          }
          console.log("result.data ==> ", result.data);
        });
    };

    const addTeam = async () => {
      await axios
        .post(
          `${baseUrl}/user/addevent`,
          {
            eventId: `${eventId}`,
            type: "team",
          },
          {
            headers: {
              Authorization: `Bearer ${authContext.token}`,
            },
          }
        )
        .then((result) => {
          console.log("Result Data===>", result.data);
          Swal.fire({
            title: "Great!!",
            text: `${result.data.message}`,
            icon: "success",
            confirmButtonColor: "skyblue",
          });
          navigate(`/user`);
        });
    };

    createTeam();
    // addTeam();
  }

  return (
    <>
      <StarCanvas />
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
                              <MenuItem onClick={registerIndividualEvent}>
                                Join as Individual
                              </MenuItem>
                              {/* {eventDetails.eventParticipationType !== 'Individual' && ( */}
                              <MenuItem
                                onClick={() => {
                                  setTeamDetails(true);
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
                                    <div
                                      className="firstLine"
                                      style={{ display: "flex" }}
                                    >
                                      <TextField
                                        id="standard-basic"
                                        label="Team Name"
                                        variant="standard"
                                        sx={{ marginBottom: 2 }}
                                        onChange={(e) => {
                                          setTeamName(e.target.value);
                                        }}
                                      />
                                      <div
                                        className="addButton"
                                        style={{ marginLeft: "auto" }}
                                      >
                                        <Tooltip title="Add Member">
                                          <Button
                                            variant=" "
                                            onClick={addTeamMember}
                                          >
                                            <MdGroupAdd />
                                          </Button>
                                        </Tooltip>
                                      </div>
                                    </div>
                                    {teamMemberEmails.map((member, index) => {
                                      return (
                                        <>
                                          <div style={{ display: "flex" }}>
                                            <TextField
                                              id="standard-basic"
                                              label="Member Email"
                                              variant="standard"
                                              value={member}
                                              sx={{ marginBottom: 2 }}
                                              onChange={(e) =>
                                                handleMemberEmail(index, e)
                                              }
                                            />
                                            {/* {index > 0 && ( */}
                                            <>
                                              <div
                                                className="removeButton"
                                                style={{ margin: "4%" }}
                                              >
                                                <Tooltip title="Remove Member">
                                                  <Button
                                                    variant=" "
                                                    onClick={() =>
                                                      removeMember(index)
                                                    }
                                                  >
                                                    <IoMdRemoveCircle />
                                                  </Button>
                                                </Tooltip>
                                              </div>
                                            </>
                                            {/* )} */}
                                          </div>
                                        </>
                                      );
                                    })}
                                    <Button
                                      variant="contained"
                                      style={{
                                        display: "flex",
                                        marginLeft: "auto",
                                      }}
                                      onClick={registerTeamEvent}
                                    >
                                      OK
                                    </Button>
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
