import React, { useState, useContext } from "react";
import axios from "axios";
import "./SignIn.css";
import Box from "@mui/material/Box";
import { TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Particle from "./Particle";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/festLogo.png";
import AuthContext from "../Auth";
import Loader from "../../Loader/loader";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#90e0ef" : "#90e0ef",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  borderRadius: "12px",
  transform: "translate(-50%)",
  background: "transparent",
  color: "#ffffff",
  //bgcolor: "background.paper",
  border: "2px solid #90e0ef",
  // boxShadow: "#90e0ef 5px 5px 5px 5px, #90e0ef -7px -7px 5px 5px, #03045e 15px 5px 10px 5px",
  boxShadow: " 0.1px 0.1px 1rem #00b4d8, -0.1px -0.1px 1rem #03045e",
  pt: 5,
  px: 4,
  pb: 5,
};

const SignIn = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorsMade, setErrorsMade] = useState();
  const [fieldErr, setFieldErr] = useState(null);
  const [mailErr, setMailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const navigate = useNavigate();

  const userLoginHandle = async () => {
    setIsLoading(true);
    await axios
      .post(`http://localhost:4030/auth/sign-in`, {
        email: email,
        password: password,
      })
      .then((result) => {
        setIsLoading(false);
        const res = result;
        if (res.status === 204) {
          setTimeout(() => {
            setMailErr(null);
            navigate("/sign-up");
          }, 3000);
        } else if (res.status === 208) {
          setPasswordErr(res.data.message);
          setTimeout(() => {
            setPasswordErr(null);
            if (res.data.message.includes("email")) {
              navigate("/sign-up");
            }
          }, 3000);
          return;
        } else if (res.status === 206) {
          setPasswordErr(res.data.message);
          setTimeout(() => {
            setPasswordErr(null);
            navigate("/verify");
          }, 3000);
          return;
        }
        if (res.status === 200) {
          const userData = {
            token: res.data.token,
            userId: res.data.userId,
            userRole: res.data.userRole,
          };
          authContext.login(userData);
          navigate("/user");
        } else {
          setErrorsMade(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  const PostData = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      setFieldErr("Field should not be empty");
      setTimeout(() => {
        setFieldErr(null);
      }, 3000);
      return;
    }
    if (!email.trim().includes("@")) {
      setMailErr("Invalid mail!");
      setTimeout(() => {
        setMailErr(null);
      }, 3000);
      return;
    }
    const user = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    userLoginHandle(user);
  };

  return (
    <>
      {isLoading && <Loader />} 
      <Particle />
      {/* <Toast open={open} message={message} success={success}/> */}
      <Stack direction="row" spacing={5} justifyContent={"space-between"}>
        <Item>
          <img src={logo} alt="Techfest'24 logo" className="techFestLogo" />
        </Item>
        <Item>
          <div className="signInContainer">
            {/* <Modal
          open={true}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          style={{
            border: "2px solid #90e0ef",
            letterSpacing: "2px",
          }}
        > */}
            <Box
              className="signin-box"
              sx={{
                ...style,
                // width: "20rem",
                height: "auto",
                background: "rgba(0,0,0,0.3)",
              }}
            >
              <h1
                id="child-modal-title"
                style={{ whiteSpace: "nowrap", marginBottom: "2rem" }}
              >
                WELCOME BACK
              </h1>
              <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>EMAIL</p>
              <TextField
                id="outlined-basic"
                // label="EMAIL"
                variant="outlined"
                fullWidth
                size="small"
                sx={{
                  marginBottom: "1rem",
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
              <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>PASSWORD</p>
              <TextField
                id="outlined-basic"
                // label="PASSWORD"
                variant="outlined"
                fullWidth
                size="small"
                sx={{
                  marginTop: "0.5rem",
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent={"space-between"}
                spacing={4}
                mt={2}
              >
                {/* <p style={{ marginTop: "0.5rem" }}>Forgot Password?</p> */}
                <Link
                  to="/reset-password"
                  style={{
                    marginTop: "0.5rem",
                    color: "#ffffff",
                    marginRight: "1.7rem",
                  }}
                  // onClick={PostData}
                >
                  Forget Password ?
                </Link>
                {/* <Link to="/forget-password" style={{marginTop:"0.5rem"}}>ForgetPassword</Link> */}
                <Item
                  sx={{
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "03045e",
                    },
                    fontWeight: "550",
                    color: "black",
                    backgroundColor: "#ffffff",
                    fontSize: "1rem",
                  }}
                  onClick={userLoginHandle}
                >
                  Sign In
                </Item>
              </Stack>
              <p style={{ margin: "1rem 0" }}>
                Don't have a account?{" "}
                <Link
                  to="/sign-up"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    fontWeight: "700",
                  }}
                >
                  Sign Up
                </Link>
              </p>
            </Box>
            {/* </Modal> */}
          </div>
        </Item>
      </Stack>
    </>
  );
};

export default SignIn;
