import React from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
  Tooltip,
  TextField,
} from "@mui/material";
// import update from "../../images/update.png";
import StarCanvas from "../landingPage/StarbackGround";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { MdDelete } from "react-icons/md";

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

const UserDashboard = () => {
  const events = ["LFR", "sliet hackathon"];
  const workshops = ["chatgpt", "solidworks"];

  const [openEditPersonal, setOpenEditPersonal] = useState(false);
  const [openEditContact, setOpenEditContact] = useState(false);

  const handleClosePersonal = () => {
    setOpenEditPersonal(false);
  };

  const handleCloseContact = () => {
    setOpenEditContact(false);
  };

  function editPersonalInfo() {
    console.log("inside edit Personal info");
    setOpenEditPersonal(true);
  }

  function editContactInfo() {
    console.log("inside edit Contact info");
    setOpenEditContact(true);
  }

  return (
    <>
      {/* <StarCanvas /> */}
      <div
        className="userDashboard"
        style={{
          marginTop: "4.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // position: "relative",
          // zindex: "10",
        }}
      >
        <div className="userinfo">
          <div
            className="greeting"
            style={{
              color: "white",
              fontSize: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
              marginBottom: "2rem",
            }}
          >
            {" "}
            Welcome to the Universe&nbsp;{" "}
            <span style={{ color: "#25c6e5", fontWeight: 750 }}>Naman</span>
            👋
          </div>

          {/* personal info */}
          <Card
            sx={{
              minWidth: 1000,
              minHeight: 200,
              border: "2px solid white",
              bgcolor: "transparent",
              borderRadius: "5px",
              color: "white",
            }}
          >
            <Box sx={{ margin: "7%" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 30, fontWeight: 700 }}>
                      Profile Information
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25, fontWeight: 500 }}>
                      Profession
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25, fontWeight: 500 }}>
                      Organisation/College Name
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25, fontWeight: 500 }}>
                      Course Enrolled
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25, fontWeight: 500 }}>
                      Year of Study
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25, fontWeight: 500 }}>
                      Date of Birth
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Tooltip
                      title="Edit Personal Detail"
                      placement="bottom-end"
                    >
                      <Button variant="" onClick={editPersonalInfo}>
                        <BiEdit style={{ height: "50px", width: "35px" }} />
                      </Button>
                    </Tooltip>
                  </Box>
                  {openEditPersonal && (
                    <Modal
                      open={true}
                      onClose={handleClosePersonal}
                      aria-labelledby="child-modal-title"
                      aria-describedby="child-modal-description"
                    >
                      <Box sx={style}>
                        <TextField
                          id="standard-basic"
                          label="Profession"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                        />

                        <TextField
                          id="standard-basic"
                          label="Organisation/College"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                        />

                        <TextField
                          id="standard-basic"
                          label="Course Enrolled"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                        />
                        <TextField
                          id="standard-basic"
                          label="Year of Study"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                        />
                        <TextField
                          id="standard-basic"
                          label="Date of Birth"
                          variant="standard"
                          sx={{
                            marginBottom: 2,
                          }}
                        />

                        <Button
                          variant="contained"
                          style={{ display: "flex", marginLeft: "auto" }}
                          onClick={handleClosePersonal}
                        >
                          OK
                        </Button>
                      </Box>
                    </Modal>
                  )}
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>Student</Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>SLIET</Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>
                      B.E. (Chemical Engineering)
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>2</Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>DD/MM/YYYY</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{}}>
                <Divider sx={{ border: "1px solid white", margin: 5 }} />
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 30, fontWeight: 700 }}>
                      Contact Details
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25, fontWeight: 500 }}>
                      E-mail Address
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25, fontWeight: 500 }}>
                      Phone Number
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25, fontWeight: 500 }}>
                      whatsapp Number
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25, fontWeight: 500 }}>
                      Telegram Number
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Tooltip title="Edit Contact Detail" placement="bottom-end">
                      <Button variant="" onClick={editContactInfo}>
                        <BiEdit style={{ height: "50px", width: "35px" }} />
                      </Button>
                    </Tooltip>
                  </Box>
                  {openEditContact && (
                    <Modal
                      open={true}
                      onClose={handleCloseContact}
                      aria-labelledby="child-modal-title"
                      aria-describedby="child-modal-description"
                    >
                      <Box sx={style}>
                        <TextField
                          id="standard-basic"
                          label="E-mail Address"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                        />

                        <TextField
                          id="standard-basic"
                          label="Phone Number"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                        />

                        <TextField
                          id="standard-basic"
                          label=" Whatsapp Number"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                        />
                        <TextField
                          id="standard-basic"
                          label="Telegram"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                        />

                        <Button
                          variant="contained"
                          style={{ display: "flex", marginLeft: "auto" }}
                          onClick={handleCloseContact}
                        >
                          OK
                        </Button>
                      </Box>
                    </Modal>
                  )}
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>
                      tashu.kulshresth@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>2345235636</Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>2345235636</Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>2345235636</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>

          {/* Events and workshop registered */}

          <Box
            sx={{
              display: "flex",
              marginTop: "2%",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              right: "2%",
              marginLeft: "3.5%",
            }}

          >
            <Card
              sx={{
                bgcolor: "transparent",
                minWidth: 500,
                minHeight: 300,
                border: "2px solid white",
                marginRight: "2%",

              }}
            >
              <Box
                sx={{
                  margin: "7%",
                  color: "white",
                  minWidth: 300,
                  height: 300,
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <FaRegLightbulb
                    style={{
                      height: "50px",
                      marginLeft: "5%",
                      marginRight: "5%",
                      marginBottom: "1%",
                    }}
                  />
                  <Typography sx={{ fontSize: 30 }}>
                    Events Registered
                  </Typography>
                </Box>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      {events.map((event, i) => {
                        return (
                          <Box sx={{ margin: "10%" }}>
                            <Typography
                              sx={{
                                fontSize: 20,
                                fontWeight: 500,
                                color: "white",
                              }}
                              key={i}
                            >
                              {event}
                            </Typography>
                            <Divider
                              sx={{ border: "0.2px solid grey", width: 400 }}
                            />
                          </Box>
                        );
                      })}
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                      <Box sx={{ margin: "10%" }}>
                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                          Today
                        </Typography>
                      </Box>
                      <Box sx={{ margin: "10%" }}>
                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                          13/04
                        </Typography>
                      </Box>
                      <Box sx={{ margin: "10%" }}>
                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                          20/04
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Card>
            <Divider sx={{ border: "1px solid white", height: 300 }} />
            <Card
              sx={{
                bgcolor: "transparent",
                minWidth: 500,
                minHeight: 300,
                border: "2px solid white",
                marginLeft: "2%",
              }}
            >
              <Box
                sx={{
                  margin: "7%",
                  color: "white",
                  minWidth: 300,
                  height: 300,
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <FaRegLightbulb
                    style={{
                      height: "50px",
                      marginLeft: "5%",
                      marginRight: "5%",
                      marginBottom: "1%",
                    }}
                  />
                  <Typography sx={{ fontSize: 30 }}>
                    Workshops Registered
                  </Typography>
                </Box>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      {workshops.map((workshop, i) => {
                        return (
                          <Box sx={{ margin: "10%" }}>
                            <Typography
                              sx={{
                                fontSize: 20,
                                fontWeight: 500,
                                color: "white",
                              }}
                              key={i}
                            >
                              {workshop}
                            </Typography>
                            <Divider
                              sx={{ border: "0.2px solid grey", width: 400 }}
                            />
                          </Box>
                        );
                      })}
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                      <Box sx={{ margin: "10%" }}>
                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                          Today
                        </Typography>
                      </Box>
                      <Box sx={{ margin: "10%" }}>
                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                          13/04
                        </Typography>
                      </Box>
                      <Box sx={{ margin: "10%" }}>
                        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                          20/04
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Card>
          </Box>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
