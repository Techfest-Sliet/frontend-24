import React, { useContext, useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
import StarCanvas from "../landingPage/StarbackGround";
import axios from "axios";
import { baseUrl } from "../../API/api";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function AddMember() {
  const [email, setEmail] = useState("");
  const { teamId } = useParams();

  const addTeamMember = () => {
    axios
      .post(`${baseUrl}/team/addmember`, {
        teamId: teamId,
        email: email,
      })
      .then((result) => {
        if (email.trim().length === 0) {
          alert("fill the email field");
        } else {
          Swal.fire({
            text: `${result.data.message}`,
            confirmButtonColor: "#0096FF",
          });
        }
      });
  };

  return (
    <>
      {/* <StarCanvas /> */}
      <div
        className="addmember"
        style={{
          margin: "4.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10",
        }}
      >
        <Typography style={{ fontSize: "2rem", fontWeight: "700" }}>
          Add Team Member
        </Typography>
        <div className="form" style={{ width: "30%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Team Member Email"
            type="Team Name"
            sx={{
              background: "grey",
              "& :: placeholder": {
                fontWeight: 800,
              },
            }}
            autoFocus
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: "200" }}
            onClick={addTeamMember}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddMember;
