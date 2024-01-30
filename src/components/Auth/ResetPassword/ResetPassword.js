import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import Particle from "../SignIn/Particle";
import logo from "../../../images/forget-password.png";
import axios from "axios";

const style = {
  position: "absolute",
  top: "52%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "75vh",
  //bgcolor: 'background.paper',
  background: "transparent",
  color: "#ffffff",
  border: "2px solid #90e0ef",
  borderRadius: "12px",
  boxShadow: " 0.1px 0.1px 1rem #00b4d8, -0.1px -0.1px 1rem #03045e",
  p: 4,
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
};

const ResetPassword = () => {
  const [email, setEmail] = useState(null);

  const handleReset = async () => {
    console.log(email);
    if (!email.trim().includes("@")) {
      alert("Invalid Email!");
    } else {
      const user = {
        email: email,
      };
      await axios
        .post("http://localhost:4030/auth/forgot-password", user)
        .then((res) => {
          console.log(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <Particle />

      {/* <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
      <Box sx={style}>
        <img
          src={logo}
          alt="forget-image"
          style={{
            height: "100%",
          }}
        />
        <div style={{ width: "40%", marginTop: "6rem" }}>
          <h1>Forgot Your Password ?</h1>
          <p
            style={{
              margin: "2rem 0 0.5rem 0",
              fontSize: "1.3rem",
              fontWeight: "600",
            }}
          >
            Enter Email Address
          </p>
          <TextField
            id="outlined-basic"
            // label="PASSWORD"
            variant="outlined"
            fullWidth
            sx={{
              margin: "0.5rem 0 2rem",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffff",
                  color: "#ffffff",
                },
                "&.Mui-focused hover": {
                  borderColor: "#ffffff",
                  color: "#ffffff",
                },
                "& fieldset": {
                  borderColor: "#ffffff",
                  color: "#ffffff",
                },
                "&:hover fieldset": {
                  borderColor: "#ffffff",
                  color: "#ffffff",
                },
              },
            }}
            InputProps={{
              sx: {
                color: "#ffffff",
                border: "1px solid #ffffff",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#ffffff",
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="outlined"
            size=""
            fullWidth
            sx={{
              backgroundColor: "transparent",
              color: "#ffffff",
              backgroundColor: "#00b4d8",
              border: "2px solid #00b4d8",
              borderRadius: "0.5rem",
              fontSize: "1.2rem",
              fontWeight: "600",
              padding: "0.2rem 0",
              ":hover": {
                borderColor: "#00b4d8",
                color: "#00b4d8",
                background: "transparent",
              },
            }}
            onClick={handleReset}
          >
            Reset Password
          </Button>
        </div>
      </Box>
      {/* </Modal> */}
    </div>
  );
};

export default ResetPassword;
