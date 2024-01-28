import React, { useState } from "react";
import axios from "axios";
import "./SignIn.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Particle from "./Particle";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#90e0ef" : "#90e0ef",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  borderRadius:"12px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "transparent",
  color: "#90e0ef",
  //bgcolor: "background.paper",
  border: "2px solid #90e0ef",
  // boxShadow: "#90e0ef 5px 5px 5px 5px, #90e0ef -7px -7px 5px 5px, #03045e 15px 5px 10px 5px",
  boxShadow: " 0.1px 0.1px 1rem #00b4d8, -0.1px -0.1px 1rem #03045e",
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
            border: "2px solid #90e0ef",
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
              fullWidth
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#90e0ef",
                    color: "#90e0ef",
                  },
                  "&.Mui-focused hover": {
                    borderColor: "#90e0ef",
                    color: "#90e0ef",
                  },
                  "& fieldset": {
                    borderColor: "#90e0ef",
                    color: "#90e0ef",
                  },
                  "&:hover fieldset": {
                    borderColor: "#90e0ef",
                    color: "#90e0ef",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "#90e0ef",
                  border: "1px solid #90e0ef",
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#90e0ef",
                },
              }}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <p>PASSWORD</p>
            <TextField
              id="outlined-basic"
              // label="PASSWORD"
              variant="outlined"
              fullWidth
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#90e0ef",
                    color: "#90e0ef",
                  },
                  "&.Mui-focused hover": {
                    borderColor: "#90e0ef",
                    color: "#90e0ef",
                  },
                  "& fieldset": {
                    borderColor: "#90e0ef",
                    color: "#90e0ef",
                  },
                  "&:hover fieldset": {
                    borderColor: "#90e0ef",
                    color: "#90e0ef",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "#90e0ef",
                  border: "1px solid #90e0ef",
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#90e0ef",
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={4} mt={2}>
              {/* <p style={{ marginTop: "0.5rem" }}>Forgot Password?</p> */}
              <Link
                to="/forget-password"
                style={{ marginTop: "0.5rem", color: "#00B4D8" ,marginRight:"1.7rem"}}
              >
                Forget Password
              </Link>
              {/* <Link to="/forget-password" style={{marginTop:"0.5rem"}}>ForgetPassword</Link> */}
              <Item
                sx={{
                  ":hover": {
                    cursor: "pointer",
                  },
                  fontWeight: "550",
                  color: "#030014",
                }}
                onClick={handleSignIn}
              >
                Sign In
              </Item>
            </Stack>
            <p mt={2}>
              Don't have a account?{" "}
              <Link
                to="/sign-up"
                style={{
                  textDecoration: "none",
                  color: "#00B4D8",
                  fontWeight:"700"

                }}
              >
                Sign Up
              </Link>
            </p>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default SignIn;
