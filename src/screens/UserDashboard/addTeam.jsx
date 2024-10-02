import React, { useContext, useState } from "react";
import StarCanvas from "../landingPage/StarbackGround";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, useMediaQuery } from "@mui/material";
import GroupAdd from "@mui/icons-material/GroupAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../API/api";

function AddTeam() {
  const [teamName, setTeamName] = useState(false);
  const [members, setMembers] = useState([" "]);
  const [teamNameError, setTeamNameError] = useState("");
  const [membersError, setMembersError] = useState("");

  const handleMemberEmail = (index, e) => {
    const newEmails = [...members];
    newEmails[index] = e.target.value;
    setMembers(newEmails);
  };

  const addMember = () => {
    setMembers([...members, " "]);
  };

  const removeMember = (index) => {
    const list = [...members];
    list.splice(index, 1);
    setMembers(list);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (teamName.trim().length === 0) {
      setTeamNameError("Please fill a team name.");
    }

    // for (let member of members) {
    //   if (member.trim().includes("@")) {
    //     setMembersError("Please fill correct email id");
    //   }
    // }
    fetch()
      .post(
        `${baseUrl}/team/create`,
        {
          teamName: teamName,
          members,
        },
      )
      .then((result) => {
        alert(result.data.title);
      });
  };

  const isMobile = useMediaQuery("(max-width:480px)");

  return (
    <>
      <StarCanvas />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: "20",
        }}
      >
        <Card
          sx={{
            width: isMobile ? "99%" : "40%",
            border: "2px solid white",
            bgcolor: "transparent",
            borderRadius: "5px",
            color: "white",
            marginTop: "4.5rem",
          }}
        >
          <Container
            component="main"
            maxWidth="xs"
            style={{ marginTop: "4.5rem", margin: isMobile && "0 0.5rem" }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: 30, fontWeight: 700 }}>
                Add Team
              </Typography>
              <Box
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  variant="outlined"
                  label="Team Name"
                  type="Team Name"
                  sx={{ background: "grey" }}
                  autoFocus
                  onChange={(e) => {
                    setTeamName(e.target.value);
                  }}
                />

                {teamNameError && (
                  <span style={{ color: "red" }}>Please fill a team name.</span>
                )}
                {members.map((member, index) => {
                  console.log("member ==> ", member);
                  return (
                    <>
                      {index <= 2 && (
                        <div className="email" style={{ display: "flex" }}>
                          <TextField
                            margin="normal"
                            required
                            label="Member Email Address"
                            value={member}
                            sx={{
                              background: "grey",
                              width: 300,
                              color: "black",
                            }}
                            autoFocus
                            onChange={(e) => handleMemberEmail(index, e)}
                          />
                          <Button variant=" " onClick={removeMember}>
                            <PersonRemoveIcon />
                          </Button>
                        </div>
                      )}
                      {index === 3 && (
                        <p style={{ color: "red" }}>
                          A team can have maximum 4 members.Please refer to the
                          Problem Statement for more clarity.
                        </p>
                      )}
                    </>
                  );
                })}
                {membersError && (
                  <span style={{ color: "red" }}>Please fill a Email.</span>
                )}
                <Button variant=" " onClick={addMember}>
                  <GroupAdd />
                </Button>
                <div style={{ display: "flex" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, width: "200" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    type="text"
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, width: "200", marginLeft: "auto" }}
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                   Go Back
                  </Button>
                </div>
              </Box>
            </Box>
          </Container>
        </Card>
      </div>
    </>
  );
}

export default AddTeam;
