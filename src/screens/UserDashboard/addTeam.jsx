import React, { useContext, useState } from "react";
import StarCanvas from "../landingPage/StarbackGround";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import GroupAdd from "@mui/icons-material/GroupAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useNavigate } from "react-router-dom";
import { color } from "framer-motion";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import AuthContext from "../../components/Auth/Auth";
import { red } from "@mui/material/colors";

function AddTeam() {
  const authContext = useContext(AuthContext);
  const [teamName, setTeamName] = useState(false);
  const [members, setMembers] = useState([" "]);

  console.log("members ==>", members);

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

    axios
      .post(
        `${baseUrl}/team/create`,
        {
          teamName: teamName,
          members,
        },
        {
          headers: {
            Authorization: "Bearer " + authContext.token,
          },
        }
      )
      .then((result) => {
        console.log("team create ==>", result.data);
        alert(result.data.title);
      });
  };

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
            width: "40%",
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
            style={{ marginTop: "4.5rem" }}
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
                  label="Team Name"
                  type="Team Name"
                  sx={{ background: "grey" }}
                  autoFocus
                  onChange={(e) => {
                    setTeamName(e.target.value);
                  }}
                />
                {members.map((member, index) => {
                  return (
                    <>
                      {index <= 2 && (
                        <div className="email" style={{ display: "flex" }}>
                          <TextField
                            margin="normal"
                            required
                            label="Member Email Address"
                            value={member.email}
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
                          A team can have maximum 4 members.
                        </p>
                      )}
                    </>
                  );
                })}
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
                    Cancel
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
