import React, { useState, useCallback } from "react";
import axios from "axios";
import "./SignIn.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { TextField, Stack, Hidden } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Particle from "./Particle";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "transparent",
  color: "white",
  //bgcolor: "background.paper",
  border: "2px solid #fff",
  //boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const SignIn = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignIn = async () => {
    // console.log(userEmail, password);

    await axios
      .post("http://localhost:4030/auth/sign-in", {
        email: userEmail,
        password: password,
      })
      .then((res) => {
        console.log(res?.data?.isError);
        if (res?.data?.isError) alert(res?.data?.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Particle />
      <div className="signInContainer">
        <Modal
          open={true}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          style={{
            border: "2px solid white",
            letterSpacing: "2px",
          }}
        >
          <Box sx={{ ...style, width: "auto", background: "rgba(0,0,0,0.3)" }}>
            <h2 id="child-modal-title" style={{ whiteSpace: "nowrap" }}>
              WELCOME BACK
            </h2>
            <p>EMAIL</p>
            <TextField
              id="outlined-basic"
              // label="EMAIL"
              variant="outlined"
              size="small"
              sx={{
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
                  color: "white",
                },
              }}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <p>PASSWORD</p>
            <TextField
              id="outlined-basic"
              // label="PASSWORD"
              variant="outlined"
              size="small"
              sx={{
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
                  color: "white",
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={4} mt={2}>
              <p style={{ marginTop: "0.5rem" }}>Forgot Password?</p>
              <Item
                sx={{
                  ":hover": {
                    cursor: "pointer",
                  },
                  fontWeight:"550",
                  color:"black",
                }}
                onClick={handleSignIn}
              >
                Sign In
              </Item>
            </Stack>
            <p mt={2}>Don't have a account? Sign Up</p>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default SignIn;
