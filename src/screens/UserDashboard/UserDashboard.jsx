import React, { useEffect } from "react";
import TeamTable from "../../components/User/Team/TeamTable";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BiSolidInstitution } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
// import update from "../../images/update.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import StarCanvas from "../landingPage/StarbackGround";

const UserDashboard = () => {
  const events = ["LFR", "sliet hackathon"];
  const workshops = ["chatgpt", "solidworks"];

  return (
    <>
      <StarCanvas />
      <div
        className="userDashboard"
        style={{
          marginTop: "4.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zindex:"10",
          width:"150%",
        }}
      >
        {/* <header
          className="animated-title"
          style={{
            width: "100%",
            height: "10%",
            // display: "flex",
            color: "white",
            // justifyContent: "center",
            // alignItems: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
          }}
        >
          User Dashboard
        </header> */}
        <div
          className="userDashboard"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
              <span style={{ color: "#25c6e5", fontWeight: 700 }}>Naman</span>
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
                      <BiEdit style={{ height: "50px", width: "35px" }} />
                    </Box>
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
                      <BiEdit style={{ height: "50px", width: "35px" }} />
                    </Box>
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
                marginLeft:"3.5%"
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
                  <Box >
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
      </div>
    </>
  );
};

export default UserDashboard;
