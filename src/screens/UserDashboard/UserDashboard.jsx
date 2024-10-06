import React, { useContext, useEffect, useState } from "react";
import { BiCool, BiEnvelopeOpen } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    Divider,
    Grid,
    Typography,
    Tooltip,
    TextField,
    useMediaQuery,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import "./UserDashboard.css";

//user imports
import { baseUrl } from "../../API/api";
// import Loader from "../../components/Loader/loader";

import TeamTable from "./TeamTable";
import TeamRequestTable from "./TeamRequestTable";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Error from "../../components/Error/Error";

const style = {
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

const departments = await fetch(`${baseUrl}/departments`).then((v) => v.json());

const UserDashboard = () => {
    const [errorMade, setErrorMade] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(false);
    const [invitations, setInvitations] = useState(null);
    const [events, setEvents] = useState({});
    const [student, setStudent] = useState({});
    const [teams, setTeam] = useState(null);
    if (teams && teams[0] && !teams[0].members) {
        Promise.all(teams.map(t => fetch(`${baseUrl}/team/member?id=${t.id}`, { credentials: "include" }).then(v => v.json()).then(v => { t.members = v; return t }))).then(setTeam)
    }
    const [teamMembers, setTeamMembers] = useState(null);
    const navigate = useNavigate();
    if (!user) {
        fetch(`${baseUrl}/profile`, { credentials: "include" }).then(v => v.json()).then((u) => { setUser(u); return u; })
            .then((u) => {
                if (u.role === "PARTICIPANT") {
                    return fetch(`${baseUrl}/profile/student`, { credentials: "include" }).then(v => v.json()).then(setStudent).catch((e) => { console.error(e); navigate("/student_profile") });
                }
            })
            .then(() => fetch(`${baseUrl}/profile/requests`, { credentials: "include" })).then((v) => v.json()).then(setInvitations)
            .then(() => fetch(`${baseUrl}/event/joined/individual`, { credentials: "include" })).then((v) => v.json()).then(setEvents)
            .then(() => fetch(`${baseUrl}/team`, { credentials: "include" })).then(v => v.json()).then(v => { setTeam(v); return v })
            .catch((e) => { console.error(e); });
        console.log(user);
    }
    console.log(`User => `, user)
    console.log(`Student => `, student)
    console.log(`Events =>`, events)

    const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };

    const teamModalStyle = {
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "55%",
        transform: "translate(-50%, -50%)",
        bgcolor: "transparent",
        p: 4,
    };

    const dateObj = new Date(user.dob);
    const formattedDate = dateObj.toLocaleDateString("en-GB", options);

    const deleteEvent = (eventId) => {
        Swal.fire({
            title: "Do you want to delete this event!!",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
            backdrop: true,
            customClass: {
                actions: "my-actions",
                cancelButton: "order-1 right-gap",
                confirmButton: "order-2",
                denyButton: "order-3",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                setIsLoading(true);
                fetch(`${baseUrl}/event/join/individual?id=${eventId}`, { method: "DELETE", credentials: "include" })
                    .then((result) => {
                        // setErrorMade({ title: "Success", message: result.data.message });
                        setIsLoading(false);
                        if (!result.ok) {
                            setErrorMade({ title: "Error", message: "Unexpected Error" });
                            return;
                        } else {
                            window.location = window.location;
                            //                          const updatedEvents = events.filter(
                            //                                  (event) => event._id !== eventId
                            //                         );
                            //                        setEvents(updatedEvents);
                        }
                    })
                    .catch((err) => {
                        setErrorMade(err);
                    });
            }
        });
    };

    const updateContactInfo = async (e) => {
        e.preventDefault();
        //if (phone.trim().length === 0) {
        //setFieldErr("Field(s) should not be empty");
        //setTimeout(() => {
        //setFieldErr(null);
        //}, 3000);
        //return;
        //}
        //setOpenEditContact(false);
        const update_user = {
            //name: name,
            email: user.email,
            //phone: Number(phone),
            //whatsappNumber: wphone,
        };
        setIsLoading(true);
        await fetch()
            .post(`${baseUrl}/user/updateuser`, update_user)
            .then((result) => {
                const res = result;
                // console.log(res);
                if (res.status === 400) {
                    //setFieldErr(
                    //"Incomplete update request! Kindly try again in some time."
                    //);
                } else if (res.status === 201) {
                    setErrorMade({
                        title: "Updated!",
                        message: "User details updated successfully.",
                    });
                }
            })
            .catch((err) => {
                // setIsLoading(false);
                console.log(err.response.data);
                return;
            });

        window.location.reload();
    };

    //get user id from the context api
    const updatePersonalInfo = async (e) => {
        e.preventDefault();

        const update_user = {
            //name: name,
            email: user.email,
            //branch: branch,
            //collegeName: collegeName,
        };
        setIsLoading(true);
        await fetch()
            .post(`${baseUrl}/user/updateuser`, update_user)
            .then((result) => {
                const res = result;
                console.log(res);
                if (res.status === 400) {
                    //setFieldErr(
                    //"Incomplete update request! Kindly try again in some time."
                    //);
                } else if (res.status === 201) {
                    setErrorMade({
                        title: "Updated!",
                        message: "User details updated successfully.",
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                return;
            });

        window.location.reload();
    };

    const isMobile = useMediaQuery("(max-width:450px)");


    return (
        <>
            {/* {isLoading && <Loader />} */}
            {user ? (
                <div
                    className="userDashboard"
                    style={{
                        marginTop: "4.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        height: "100%",
                    }}
                >
                    <div class="blur-background"></div>
                    <div
                        className="userinfo"
                        style={{
                            position: "relative",
                            zIndex: "1",
                            width: isMobile ? "98%" : "70%",
                        }}
                    >
                        <div
                            className="greeting"
                            style={{
                                fontSize: isMobile ? "1.2rem" : "2rem",
                                color: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1rem",
                                marginBottom: "2rem",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {" "}
                            Welcome to the Universe &nbsp;{" "}
                            <span
                                style={{ color: "#25c6e5", fontWeight: isMobile ? 600 : 700 }}
                            >
                                {user.name}
                            </span>
                            👋
                        </div>

                        {/* personal info */}
                        <Card
                            sx={{
                                width: "100%",
                                border: "2px solid white",
                                bgcolor: "transparent",
                                borderRadius: "5px",
                                color: "white",
                            }}
                        >
                            <Box sx={{ margin: "7%" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 25 : 30,
                                                    fontWeight: 700,
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                Profile Information
                                            </Typography>
                                        </Box>

                                        {!user.verified &&
                                            <Button
                                                onClick={() => fetch(`${baseUrl}/auth/verify`, { method: "POST", credentials: "include" })}
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: "#9867c5",
                                                    "&:hover": {
                                                        backgroundColor: "#9867c5",
                                                    },
                                                    "&:focus": {
                                                        backgroundColor: "#9867c5",
                                                    },
                                                    "&:active": {
                                                        backgroundColor: "#9867c5",
                                                    },
                                                    zIndex: "24"
                                                }}
                                            >
                                                Resend Verification Email
                                            </Button>}
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 20 : 25,
                                                    fontWeight: 500,
                                                    height: isMobile ? "6rem" : "3rem",
                                                }}
                                            >
                                                Profession
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 20 : 25,
                                                    fontWeight: 500,
                                                    height: isMobile ? "6rem" : "5rem",
                                                }}
                                            >
                                                {!isMobile
                                                    ? "Organisation/College Name"
                                                    : "College Name"}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginBottom: "5%",
                                                height: isMobile ? "6rem" : "3rem",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 20 : 25,
                                                    fontWeight: 500,
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                Course Enrolled
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 20 : 25,
                                                    fontWeight: 500,
                                                    height: isMobile ? "6rem" : "3rem",
                                                }}
                                            >
                                                Date of Birth
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <BiCool
                                                style={{
                                                    height: isMobile ? "30px" : "50px",
                                                    width: "35px",
                                                }}
                                            />
                                        </Box>
                                        {/*openEditPersonal && (
                                                                                        <Modal
                                                                                                open={true}
                                                                                                onClose={handleClosePersonal}
                                                                                                aria-labelledby="child-modal-title"
                                                                                                aria-describedby="child-modal-description"
                                                                                        >
                                                                                                <Box sx={style}>
                                                                                                        {fieldErr && (
                                                                                                                <p style={{ color: "red" }}>{fieldErr}</p>
                                                                                                        )}

                                                                                                        <TextField
                                                                                                                id="standard-basic"
                                                                                                                label="Organisation/College"
                                                                                                                variant="standard"
                                                                                                                sx={{ marginBottom: 2 }}
                                                                                                                onChange={(e) => setCollegeName(e.target.value)}
                                                                                                        />

                                                                                                        <TextField
                                                                                                                id="standard-basic"
                                                                                                                label="Course Enrolled"
                                                                                                                variant="standard"
                                                                                                                sx={{ marginBottom: 2 }}
                                                                                                                onChange={(e) => setBranch(e.target.value)}
                                                                                                        />

                                                                                                        <Button
                                                                                                                variant="contained"
                                                                                                                style={{ display: "flex", marginLeft: "auto" }}
                                                                                                                onClick={updatePersonalInfo}
                                                                                                        >
                                                                                                                OK
                                                                                                        </Button>
                                                                                                </Box>
                                                                                        </Modal>
                                                                                )*/}
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 20 : 25,
                                                    height: isMobile ? "4.5rem" : "3rem",
                                                }}
                                            >
                                                {user.role}
                                            </Typography>
                                        </Box>
                                        {user.role === "PARTICIPANT" && <>
                                            <Box sx={{ marginBottom: "5%" }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: isMobile ? 20 : 25,
                                                        height: isMobile ? "7rem" : "3rem",
                                                    }}
                                                >
                                                    {student && student.college}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ marginBottom: "5%" }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: isMobile ? 20 : 25,
                                                        height: isMobile ? "6rem" : "4rem",
                                                    }}
                                                >
                                                    {console.log(departments)}
                                                    {student && departments && departments[student.dept]}
                                                </Typography>
                                            </Box> </>}
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 20 : 25,
                                                    height: isMobile ? "6rem" : "3rem",
                                                }}
                                            >
                                                {user && formattedDate}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box sx={{}}>
                                    <Divider sx={{ border: "1px solid white", margin: 5 }} />
                                </Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 25 : 30,
                                                    fontWeight: 700,
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                Contact Details
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 20 : 25,
                                                    fontWeight: 500,
                                                    height: isMobile ? "4rem" : "3rem",
                                                }}
                                            >
                                                {isMobile ? "E-mail" : "E-mail Address"}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 20 : 25,
                                                    fontWeight: 500,
                                                    height: isMobile ? "4rem" : "3rem",
                                                }}
                                            >
                                                Phone Number
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                                        <Box sx={{ marginBottom: isMobile ? "4%" : "5%" }}>
                                            <Tooltip
                                                title="Edit Contact Detail"
                                                placement="bottom-end"
                                            >
                                                <Button variant="" onClick={() => { }}>
                                                    <BiEnvelopeOpen
                                                        style={{
                                                            height: isMobile ? "30px" : "50px",
                                                            width: "35px",
                                                        }}
                                                    />
                                                </Button>
                                            </Tooltip>
                                        </Box>
                                        {/*openEditContact && (
                                                                                        <Modal
                                                                                                open={true}
                                                                                                onClose={handleCloseContact}
                                                                                                aria-labelledby="child-modal-title"
                                                                                                aria-describedby="child-modal-description"
                                                                                        >
                                                                                                <Box sx={style}>
                                                                                                        <TextField
                                                                                                                id="standard-basic"
                                                                                                                label="Phone Number"
                                                                                                                variant="standard"
                                                                                                                sx={{ marginBottom: 2 }}
                                                                                                                onChange={(e) => setPhone(e.target.value)}
                                                                                                        />
                                                                                                        <Button
                                                                                                                variant="contained"
                                                                                                                style={{ display: "flex", marginLeft: "auto" }}
                                                                                                                onClick={updateContactInfo}
                                                                                                        >
                                                                                                                OK
                                                                                                        </Button>
                                                                                                </Box>
                                                                                        </Modal>
                                                                                )*/}
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 18 : 25,
                                                    left: isMobile ? "0rem" : "0rem",
                                                    position: "relative",
                                                    whiteSpace: "nowrap",
                                                    height: isMobile ? "4rem" : "3rem",
                                                }}
                                            >
                                                {user && user.email}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ marginBottom: "5%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: isMobile ? 20 : 25,
                                                    height: isMobile ? "4rem" : "3rem",
                                                }}
                                            >
                                                {user && user.phone}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Card>

                        {/* Events and workshop registered */}

                        <Box
                            sx={{
                                display: "flex",
                                marginTop: "2%",
                                flexDirection: isMobile ? "column" : "row",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                                width: "100%",
                                marginBottom: "1rem",
                            }}
                        >
                            <Card
                                sx={{
                                    bgcolor: "transparent",
                                    border: "2px solid white",
                                    marginRight: !isMobile && "2%",
                                    width: "100%",
                                }}
                            >
                                <Box
                                    sx={{
                                        margin: "7%",
                                        color: "white",
                                        minWidth: 300,
                                        height: 300,
                                        overflowY: "scroll",
                                    }}
                                >
                                    <Box sx={{ display: "flex" }}>
                                        <FaRegLightbulb
                                            style={{
                                                height: isMobile ? "35px" : "50px",
                                                marginLeft: "5%",
                                                marginRight: "5%",
                                                marginBottom: "1%",
                                            }}
                                        />
                                        <Typography sx={{ fontSize: isMobile ? 25 : 30 }}>
                                            Events Registered
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                {events && events.length === 0 && (
                                                    <p>Not Registered to any event 🙄.</p>
                                                )}
                                                {events &&
                                                    events.length > 0 &&
                                                    events.map((event) => {
                                                        return (
                                                            <>
                                                                <Box sx={{ margin: "10%" }}>
                                                                    <Typography
                                                                        sx={{
                                                                            fontSize: 20,
                                                                            fontWeight: 500,
                                                                            color: "white",
                                                                        }}
                                                                        key={event.id}
                                                                    >
                                                                        {event.name}
                                                                    </Typography>
                                                                    <Divider
                                                                        sx={{
                                                                            border: "0.2px solid grey",
                                                                            width: 380,
                                                                        }}
                                                                    />
                                                                </Box>
                                                            </>
                                                        );
                                                    })}
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: "right" }}>
                                                {events &&
                                                    events.length > 0 &&
                                                    events.map((event) => {
                                                        return (
                                                            <Box sx={{ margin: "10%" }}>
                                                                <a href={event.whatsapp_link} target="_main">
                                                                    <Tooltip title="Group Whatsapp Link">
                                                                        <Button variant=" ">
                                                                            <IoLogoWhatsapp color="green" />
                                                                        </Button>
                                                                    </Tooltip>
                                                                </a>
                                                                <Tooltip title="Delete Event">
                                                                    <Button
                                                                        variant=" "
                                                                        onClick={() => deleteEvent(event.id)}
                                                                    >
                                                                        <MdDelete />
                                                                    </Button>
                                                                </Tooltip>
                                                            </Box>
                                                        );
                                                    })}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Card>
                            <Divider
                                sx={{
                                    border: "1px solid white",
                                    height: 500,
                                    display: isMobile ? "none" : "block",
                                }}
                            />
                            <Card
                                sx={{
                                    bgcolor: "transparent",
                                    border: "2px solid white",
                                    marginLeft: !isMobile && "2%",
                                    width: "100%",
                                    marginTop: isMobile && "1rem",
                                }}
                            >
                                <Box
                                    sx={{
                                        margin: "7%",
                                        color: "white",
                                        minWidth: 300,
                                        height: 300,
                                        overflowY: "scroll",
                                    }}
                                >
                                    <Box sx={{ display: "flex" }}>
                                        <FaRegLightbulb
                                            style={{
                                                height: isMobile ? "35px" : "50px",
                                                marginLeft: "5%",
                                                marginRight: "5%",
                                                marginBottom: "1%",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: isMobile ? 25 : 30,
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            Workshops Registered
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                {/*workshops &&
                                                                                                        workshops.length === 0 &&
                                                                                                        "Not registered to any workshop 🙄."*/}
                                                {/*workshops &&
                                                                                                        workshops.length > 0 &&
                                                                                                        workshops.map((workshop) => {
                                                                                                                return (
                                                                                                                        <Box sx={{ margin: "10%" }}>
                                                                                                                                <Typography
                                                                                                                                        sx={{
                                                                                                                                                fontSize: 20,
                                                                                                                                                fontWeight: 500,
                                                                                                                                                color: "white",
                                                                                                                                        }}
                                                                                                                                        key={workshop._id}
                                                                                                                                >
                                                                                                                                        {workshop.workshopName}
                                                                                                                                </Typography>
                                                                                                                                <Divider
                                                                                                                                        sx={{
                                                                                                                                                border: "0.2px solid grey",
                                                                                                                                                width: 400,
                                                                                                                                        }}
                                                                                                                                />
                                                                                                                        </Box>
                                                                                                                );
                                                                                                        })*/}
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: "right" }}>
                                                {/*workshops &&
                                                                                                        workshops.length > 0 &&
                                                                                                        workshops.map((workshop) => {
                                                                                                                return (
                                                                                                                        <Box sx={{ margin: "10%" }}>
                                                                                                                                <Typography
                                                                                                                                        sx={{ fontSize: 20, fontWeight: 500 }}
                                                                                                                                >
                                                                                                                                        {workshop.workshopDate}
                                                                                                                                </Typography>
                                                                                                                        </Box>
                                                                                                                );
                                                                                                        })*/}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                        {/*Team Requests Table*/}
                        {invitations && <Card
                            sx={{
                                width: "100%",
                                border: "2px solid white",
                                bgcolor: "transparent",
                                borderRadius: "5px",
                                color: "white",
                            }}
                        >
                            <Box sx={{ margin: "7%" }}>
                                <TeamRequestTable
                                    setInvitations={setInvitations}
                                />
                            </Box>
                        </Card>}

                        {/* team table */}

                        <Card
                            sx={{
                                width: "100%",
                                border: "2px solid white",
                                bgcolor: "transparent",
                                borderRadius: "5px",
                                color: "white",
                            }}
                        >
                            <Box sx={{ margin: "7%" }}>
                                <TeamTable
                                    teams={teams}
                                //events={events}
                                />
                            </Box>
                        </Card>
                    </div>
                </div>
            ) : (
                <>
                    <Error />
                </>
            )
            }
        </>
    );
};

export default UserDashboard;
