import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  useMediaQuery,
  Typography,
} from "@mui/material";
import Particle from "../SignIn/Particle";
import logo from "../../../images/forget-password.png";
import axios from "axios";
import Toast from "../../Toast";
import { FaLeaf } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80vh",

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

const modalStyle = {
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

const ResetPassword = () => {
  const [email, setEmail] = useState(null);
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  const openToast = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleReset = async () => {
    if (!email) {
      setSuccess(false);
      setMessage("Enter email");
      openToast();
    } else {
      if (!email.trim().includes("@")) {
        setSuccess(false);
        setMessage("Enter correct email");
        openToast();
        return;
      }

      setCheckEmail(true);

      const user = {
        email: email,
      };
      await axios
        .post("http://localhost:4030/auth/forgot-password", user)
        .then((res) => {
          const obj = JSON.parse(res?.data);
          if (obj?.title == "Success") setSuccess(true);
          else setSuccess(false);
          setMessage(obj?.message);
          openToast();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const isMobile = useMediaQuery("(max-width:450px)");

  return (
    <div>
      <Particle />

      <Toast open={open} success={success} message={message} />

      <Box
        sx={{
          ...style,
          p: isMobile ? 2 : 4,
          top: isMobile ? "55%" : "50%",
          height: isMobile ? "7git 0vh" : "80vh",
        }}
      >
        <img
          src={logo}
          alt="forget-image"
          style={{
            height: "100%",
            display: isMobile ? "none" : "block",
          }}
        />
        <div style={{ width: isMobile ? "100%" : "40%", marginTop: "6rem" }}>
          <h1 style={{ fontSize: isMobile ? "1.5rem" : "2.5rem" }}>
            Forgot Your Password ?
          </h1>
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
              "&.Mui-focused hover": {
                borderColor: "#ffffff",
                color: "#ffffff",
              },
              "& fieldset": {
                borderColor: "#ffffff",
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
          {checkEmail && (
            <>
              <Modal
                open={checkEmail}
                onClose={() => {
                  setCheckEmail(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <Typography>
                    Check your registered email
                  </Typography>
                  <Button variant="contained" style={{display:"flex", marginLeft:"auto"}} onClick={() => {
                      setCheckEmail(false)
                  }}>
                    OK
                  </Button>
                </Box>
              </Modal>
            </>
          )}
        </div>
      </Box>
    </div>
  );
};

export default ResetPassword;
