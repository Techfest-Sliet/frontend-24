import { Stack, Box, Typography, Button, Modal } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../API/Api";
import axios from "axios";
import AuthContext from "../Auth/Auth";
import eventsData from "../../utils/events";

const EventDisplayer = ({eventDetails}) => {
  const authContext = useContext(AuthContext);
  const [variable, setVariable] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);
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
  }, [authContext, authContext.login]);

  const navigate = useNavigate();

  const { eventId } = useParams();
  const domainId = useParams();
  // const selectedEvent = events.find((event) => event.id === parseInt(eventId));

  const [showOptions, setShowOptions] = useState(false);

  async function registerEvent() {
    setShowOptions(true);
    await axios
      .post(
        `${baseUrl}/user/addevent/${eventId}`,
        { eventId: parseInt(eventId) },
        {
          // headers: {
          //   Authorization: `Bearer ${token}`, // Add your token here
          // },
        }
      )
      .then((result) => {
        console.log("Result Data===>", result.data);
        // navigate(`/user-dashboard`);
      });
  }

  return (
    <>
      <StarCanvas />
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
                      alt="workshopLogo"
                      // width={200}
                      height={250}
                      style={{
                        objectFit: "cover",
                        boxShadow: "12px 15px 4px  #030014",
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
                    >
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        height: "85%",
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Rem aliquid nostrum vitae a assumenda ipsa in
                        deleniti eius numquam sunt, perferendis omnis ab
                        possimus ipsum libero, accusantium nisi obcaecati.
                        Maxime, consequuntur repellat ab labore, perferendis
                        explicabo dolores ea quasi hic pariatur perspiciatis!
                        Dolorem tempora ipsa ipsam quod quisquam deserunt dolore
                        autem voluptas vitae nostrum iure ratione, veritatis
                        velit! Sit odit deserunt, adipisci quasi explicabo,
                        accusamus libero architecto culpa eligendi voluptas
                        aspernatur fugiat placeat fugit! Labore nemo maiores
                        laborum saepe et, illo laudantium quibusdam aspernatur
                        reiciendis minima cum vero suscipit ex sunt sit beatae!
                        Autem iusto fugit, animi adipisci quis similique?
                        {/* {details} */}
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
                      <Button
                        onClick={() => {
                          
                        }}
                      >
                        Problem Statement
                      </Button>
                      <Box display={"flex"} gap={1}>
                        <Button variant="contained" onClick={registerEvent}>
                          Register
                        </Button>
                        <Button
                          onClick={() => {
                            console.log(
                              "display the faculty advisor and domain coordinator"
                            );
                            handleVariableSeting();
                          }}
                        >
                          contact Us
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Stack>
              </div>
            </div>
          {showOptions && (
            <Modal
              open={true}
              onClose={() => {
                setShowOptions(false);
              }}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
              style={{ display: "flex" }}
            >
              <Button variant="contained">Join As Individual</Button>
              <Button variant="outlined">Join As Team</Button>
            </Modal>
          )}
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
                    boxShadow={"2px 2px 12px #030014"}
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
                    <Button
                      onClick={() => console.log("open problem statement")}
                    >
                      Problem Statement
                    </Button>
                    <Box display={"flex"} gap={1}>
                      <Button variant="contained" onClick={registerEvent}>
                        Register
                      </Button>
                      <Button
                        onClick={() => {
                          console.log(
                            "display the faculty advisor and domain coordinator"
                          );
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
