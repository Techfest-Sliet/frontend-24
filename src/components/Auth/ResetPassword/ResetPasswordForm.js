// ResetPasswordForm.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
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
import { baseUrl } from "../../../API/api";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80vh",
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

const ResetPasswordForm = () => {
    const location = useLocation();
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(null);
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // Extract query parameters (id and token) from the URL
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");
    const token = queryParams.get("token");

    const openToast = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    };


    const handlePasswordReset = async () => {
        if (!password) {
            setSuccess(false);
            setMessage("Enter new password");
            openToast();
            return;
        }
    
        const payload = {
            id,
            token,
            password,
        };
    
        try {
            const response = await fetch(`${baseUrl}/profile/password_reset`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(payload).toString(),
            });
            if (!response.ok) {
                setSuccess(false);
                setMessage(`Error: ${response.status} - ${response.statusText}`);
                openToast();
                return;
            } else {
                setSuccess(true);
                setMessage("Password reset successfully");
                openToast();
                setTimeout(() => navigate("/login"), 3000);
            }
        } catch (err) {
            console.log("Error:", err);
            setSuccess(false);
            setMessage("Something went wrong.");
            openToast();
        }
    };
    

    const isMobile = useMediaQuery("(max-width:450px)");

    return (
        <div>
            <Particle />
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={3000}
            >
                <Alert
                    onClose={() => setOpen(false)}
                    severity={success ? "success" : "error"}
                >
                    {message}
                </Alert>
            </Snackbar>

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
                <div style={{ width: "100%", marginTop: "6rem" }}>
                    <Typography variant="h4">Reset Your Password</Typography>
                    <p
                        style={{
                            margin: "2rem 0 0.5rem 0",
                            fontSize: "1.3rem",
                            fontWeight: "600",
                        }}
                    >
                        Enter New Password
                    </p>
                    <TextField
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            margin: "0.5rem 0 2rem",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#ffffff",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#ffffff",
                                },
                            },
                        }}
                    />
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            backgroundColor: "#00b4d8",
                            color: "#ffffff",
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
                        onClick={handlePasswordReset}
                    >
                        Submit
                    </Button>
                </div>
            </Box>
        </div>
    );
};

export default ResetPasswordForm;
