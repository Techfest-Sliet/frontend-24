import { Stack, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EventDisplayer = ({ Img, events }) => {
  const [variable, setVariable] = useState(1);
  const handleVariableSeting = () => {
    setVariable(2);
  };
  const handleResetVariable = () => {
    setVariable(1);
  };

  const navigate = useNavigate();

  const { eventId } = useParams();
  const selectedEvent = events.find(event => event.id === parseInt(eventId));

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
                      className={Img}
                      src={Img}
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
                      {selectedEvent.name}
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
                        onClick={() => console.log("open problem statement")}
                      >
                        Problem Statement
                      </Button>
                      <Box display={"flex"} gap={1}>
                        <Button variant="contained" onClick={() => navigate('/user-dashboard')}>
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
                      <p>
                        Gaurav : <span> +91-8920681592</span> /2140113{" "}
                      </p>
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
                      <Button
                        variant="contained"
                        onClick={() =>
                          console.log(
                            "clicked add conditions to check if loged in then only register else redirect to login page "
                          )
                        }
                      >
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
