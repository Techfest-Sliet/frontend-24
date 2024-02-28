import React, { useContext, useEffect, useState } from "react";
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
import Modal from "@mui/material/Modal";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { IoLogoWhatsapp } from "react-icons/io";
import bg from "../../images/userDashboardBg.jpg";
import "./UserDashboard.css";

//user imports
import AuthContext from "../../components/Auth/Auth";
import { baseUrl } from "../../API/Api";
//loader
//error model

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
  // const events = ["LFR", "sliet hackathon"];
  // const workshops = ["chatgpt", "solidworks"];

  const authContext = useContext(AuthContext);
  const [errorMade, setErrorMade] = useState();
  const [userId, setUserId] = useState();
  const [workshops, setWorkshops] = useState("");
  const [events, setEvents] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [openEditPersonal, setOpenEditPersonal] = useState(false);
  const [openEditContact, setOpenEditContact] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [branch, setBranch] = useState("");
  const [phone, setPhone] = useState("");
  const [wphone, setWphone] = useState("");
  const [fieldErr, setFieldErr] = useState(null);
  const [branchErr, setBranchErr] = useState(null);
  const [updatePersonalInfo, setUpdatePersonalInfo] = useState(false);
  const [updateContactInfo, setUpdateContactInfo] = useState(false);

  const [user, setUser] = useState("");

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const dateObj = new Date(user.dob);
  const formattedDate = dateObj.toLocaleDateString("en-GB", options);

  const handleClosePersonal = () => {
    setOpenEditPersonal(false);
  };

  const handleCloseContact = () => {
    setOpenEditContact(false);
  };

  function editPersonalInfo() {
    setOpenEditPersonal(true);
  }

  function editContactInfo() {
    console.log("inside edit Contact info");
    setOpenEditContact(true);
  }

  const deleteEvent = (id) => {
    setIsLoading(true);
    axios
      .post(
        `${baseUrl}/user/pullevent`,
        { id: id },
        {
          headers: {
            Authorization: "Bearer " + authContext.token,
          },
        }
      )
      .then((result) => {
        setErrorMade({ title: "Success", message: result.data.message });
        setIsLoading(false);
        if (result.data.isError) {
          setErrorMade({ title: "Error", message: result.data.message });
          return;
        } else {
          const updatedEvents = events.filter((event) => event._id !== id);
          setEvents(updatedEvents);
        }
      });
  };

  //get user id from the context api
  const updatePersonalinfo = async (e) => {
    setOpenEditPersonal(false);
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      phone.trim().length === 0 ||
      collegeName.trim().length === 0 ||
      wphone.trim().length === 0
    ) {
      setFieldErr("Field should not be empty");
      setTimeout(() => {
        setFieldErr(null);
      }, 3000);
      return;
    }
    if (branch === "0") {
      setBranchErr("Please choose your branch");
      setTimeout(() => {
        setBranchErr(null);
      }, 3000);
      return;
    }
    setUpdatePersonalInfo(true);
    const update_user = {
      name: name,
      email: user.email,
      phone: Number(phone),
      whatsappPhoneNumber: wphone,
      branch: branch,
      collegeName: collegeName,
      // dob: dob,
    };
    setIsLoading(true);
    await axios
      .post(`${baseUrl}/user/updateuser`, update_user)
      .then((result) => {
        const res = result;
      })
      .catch((err) => {
        // setIsLoading(false);
        console.log(err.response.data);
        return;
      });
  };

  useEffect(() => {
    setIsLoading(true);
    console.log("Authcontext==>", authContext);
    setUserId(authContext.userId);
    const userId = authContext.userId;
    console.log("userId ==> ", authContext.userId);
    axios
      .get(`${baseUrl}/user/getUserById/${userId}`)
      .then((result) => {
        console.log("result: ", result);
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
        setUser(result.data.user);
        setWorkshops(result.data.user.workshops);
        setTeamMembers(result.data.user.teamMembers);
        setEvents(result.data.user.events);
        console.log(user);
      })
      .catch((err) => {
        // return err.status(208).json({
        //   title: "Auth Error",
        //   message: "Wrong user auth!",
        // });
      });
  }, [authContext, authContext.login]);

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
          position: "relative",
          height: "100%",
        }}
      >
        <div class="blur-background"></div>
        <div
          className="userinfo"
          style={{
            position: "relative",
            zIndex: "1",
          }}
        >
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
            <span style={{ color: "#25c6e5", fontWeight: 750 }}>
              {user && user.name.toUpperCase()}
            </span>
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
                          label="Name"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                          onChange={(e) => setName(e.target.value)}
                        />

                        <TextField
                          id="standard-basic"
                          label="Organisation/College"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                          onChange={(e) => setCollegeName(e.target.value)}
                        />

                        <TextField
                          id="standard-basic"
                          label="Course Enrolled"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                          onChange={(e) => setBranch(e.target.value)}
                        />

                        <Button
                          variant="contained"
                          style={{ display: "flex", marginLeft: "auto" }}
                          onClick={updatePersonalinfo}
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
                    <Typography sx={{ fontSize: 25 }}>
                      {user && user.collegeName}
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>
                      {user && user.branch}
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>3rd</Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>
                      {user && formattedDate}
                    </Typography>
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
                      Whatsapp Number
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
                          label="Phone Number"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                          onChange={(e) => setPhone(e.target.value)}
                        />

                        <TextField
                          id="standard-basic"
                          label=" Whatsapp Number"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                          onChange={(e) => setWphone(e.target.value)}
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
                      {user && user.email}
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "5%" }}>
                    <Typography sx={{ fontSize: 25 }}>
                      {user && user.phone}
                    </Typography>
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
                      {events &&
                        events.length === 0 &&
                        "Not Registered to any event 🙄."}
                      {events &&
                        events.length > 0 &&
                        events.map((event) => {
                          return (
                            <Box sx={{ margin: "10%" }}>
                              <Typography
                                sx={{
                                  fontSize: 20,
                                  fontWeight: 500,
                                  color: "white",
                                }}
                                key={event._id}
                              >
                                {event.eventName}
                              </Typography>
                              <Divider
                                sx={{
                                  border: "0.2px solid grey",
                                  width: 400,
                                }}
                              />
                            </Box>
                          );
                        })}
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                      {events &&
                        events.length > 0 &&
                        events.map((event) => {
                          return (
                            <Box sx={{ margin: "10%" }}>
                              <Typography
                                sx={{ fontSize: 20, fontWeight: 500 }}
                              >
                                {event.eventDate}
                              </Typography>
                              <MdDelete />
                            </Box>
                          );
                        })}
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                      {events &&
                        events.length > 0 &&
                        events.map((event) => {
                          return (
                            <Box sx={{ margin: "10%" }}>
                              <Button
                                sx={{
                                  fontSize: 20,
                                  fontWeight: 500,
                                  color: "white",
                                }}
                                key={event._id}
                              >
                                <a href={`${event.whatsappLink}`}>
                                  <IoLogoWhatsapp />
                                </a>
                              </Button>
                            </Box>
                          );
                        })}
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
                      {workshops &&
                        workshops.length === 0 &&
                        "Not registered to any workshop 🙄."}
                      {workshops &&
                        workshops.length > 0 &&
                        workshops.map((workshop) => {
                          return (
                            <Box sx={{ margin: "10%" }}>
                              <Typography
                                sx={{
                                  fontSize: 20,
                                  fontWeight: 500,
                                  color: "white",
                                }}
                                key={workshop._id}
                              >
                                {workshop.workshopName}
                              </Typography>
                              <Divider
                                sx={{
                                  border: "0.2px solid grey",
                                  width: 400,
                                }}
                              />
                            </Box>
                          );
                        })}
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                      {workshops &&
                        workshops.length > 0 &&
                        workshops.map((workshop) => {
                          return (
                            <Box sx={{ margin: "10%" }}>
                              <Typography
                                sx={{ fontSize: 20, fontWeight: 500 }}
                              >
                                {workshop.workshopDate}
                              </Typography>
                            </Box>
                          );
                        })}

                      {/* <Box sx={{ margin: "10%" }}>
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
                      </Box> */}
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
