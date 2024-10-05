import React, { useState, useContext } from "react";
import "./Profile.css";
import styles from "./Profile.module.css";
import Box from "@mui/material/Box";
import { TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Particle from "./Particle";
import { Link, useNavigate } from "react-router-dom";
// import Loader from "../../Loader/loader";
import { baseUrl } from "../../../API/api";
import { red } from "@mui/material/colors";

const departments = await fetch(`${baseUrl}/departments`).then((v) => v.json()).then(Object.entries);
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

const Profile = () => {
    const [college, setCollege] = useState("");
    const [reg_no, setRegNo] = useState("");
    const [dept, setDept] = useState("");
    // const [isLoading, setIsLoading] = useState(false);
    const [fieldErr, setFieldErr] = useState(null);
    const [mailErr, setMailErr] = useState(null);
    const [passwordErr, setPasswordErr] = useState(null);
    const navigate = useNavigate();

    function completeProfile() {
        fetch(`${baseUrl}/profile/student`, { method: "POST", credentials: "include", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ college: college, reg_no: reg_no, dept: dept }) }).then(v => v.json()).then(console.log).then(() => navigate("/user")).catch((v) => { navigate("/") })
    }

    return (
        <>
            <Particle />
            {/* {isLoading && <Loader />} */}
            <Stack direction="row" spacing={5} justifyContent={"space-between"}>
                <Item>
                    <img
                        src="/logo.png"
                        alt="Techfest'24 logo"
                        className="techFestLogo"
                    />
                </Item>
                <Item>
                    <div className="signInContainer">
                        <Box
                            className="signin-box"
                            sx={{
                                ...style,
                                height: "auto",
                                background: "rgba(0,0,0,0.3)",
                            }}
                        >
                            <h1
                                id="child-modal-title"
                                style={{ whiteSpace: "nowrap", marginBottom: "2rem" }}
                            >
                                Complete Your Profile
                            </h1>
                            <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>College</p>
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
                                onChange={(e) => setCollege(e.target.value)}
                            />
                            <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>Registeration Number</p>
                            <TextField
                                id="outlined-basic"
                                type="password"
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
                                onChange={(e) => setRegNo(e.target.value)}
                            />
                            <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>Department</p>

                            <select
                                className={styles.signup__select}
                                sx={{ height: "20px" }}
                                onChange={(e) => setDept(e.target.value)}
                                id="department"
                                name="department"
                                value={dept}
                                required
                            >
                                <option value="0">Department Enrolled</option>
                                {departments.map((e) => <><option value={e[0]}>{e[1]}</option></>)}
                            </select>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                justifyContent={"space-between"}
                                spacing={4}
                                mt={2}
                            >
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
                                    onClick={(e) => completeProfile(e)}
                                >
                                    Complete Profile
                                </Item>
                            </Stack>

                        </Box>
                    </div>
                </Item>
            </Stack>
        </>
    );
};

export default Profile;
