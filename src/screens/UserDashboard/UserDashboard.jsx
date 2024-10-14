import React, { useState } from "react";
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
    useMediaQuery,
} from "@mui/material";
import "./UserDashboard.css";

//user imports
import { baseUrl } from "../../API/api";
import Loader from "../../components/Loader/loader";

import TeamTable from "./TeamTable";
import TeamRequestTable from "./TeamRequestTable";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

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

const throwError = (e) => {
    if (!e.ok) {
        Swal.fire({
            title: 'Error!',
            text: `Unexpected Error: ${e.statusText}`,
            icon: 'error',
        })
    }
    return e;
}

const throwTextError = (e) => {
    Swal.fire({
        title: 'Error!',
        text: `Unexpected Error: ${e}`,
        icon: 'error',
    })
}

const UserDashboard = () => {
    const [user, setUser] = useState(false);
    const [invitations, setInvitations] = useState(null);
    const [events, setEvents] = useState([]);
    const [workshops, setWorkshops] = useState([]);
    const [student, setStudent] = useState({});
    const [teams, setTeam] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    if (teams && teams[0] && !teams[0].members) {
        console.log("Team =>>", teams);
        Promise.all(teams.map(team =>
            fetch(`${baseUrl}/event/joined/team?id=${team.id}`, { credentials: "include" }).then(eventsResp => eventsResp.json())
                .then(events =>
                    Promise.all(events.map(event => fetch(`${baseUrl}/event/domain?id=${event.id}`, { credentials: "include" })
                        .then(domainResp => domainResp.json()).then(domain => { event.domain = domain; return event })))
                )
                .then(events => { team.events = events; return team; }).then(team =>
                    fetch(`${baseUrl}/team/member?id=${team.id}`, { credentials: "include" }).then(membersResp => membersResp.json()).then(members => { team.members = members; return team })
                )
        )).then(setTeam);
    }
    const navigate = useNavigate();
    if (!user) {
        fetch(`${baseUrl}/profile`, { credentials: "include" }).then(throwError).then(v => v.json()).then((u) => { setUser(u); return u; })
            .then((u) => {
                if (u.role === "PARTICIPANT") {
                    return fetch(`${baseUrl}/profile/student`, { credentials: "include" }).then(throwError).then(v => v.json()).then(setStudent).catch((e) => { console.error(e); navigate("/student_profile") });
                }
            })
            .then(() => fetch(`${baseUrl}/profile/requests`, { credentials: "include" })).then(throwError).then((v) => v.json()).then(setInvitations)
            .then(() => fetch(`${baseUrl}/event/joined/individual`, { credentials: "include" })).then(throwError).then((v) => v.json()).then(setEvents)
            .then(() => fetch(`${baseUrl}/workshop/joined/individual`, { credentials: "include" })).then(throwError).then((v) => v.json()).then(setWorkshops)
            .then(() => fetch(`${baseUrl}/team/request`, { credentials: "include" })).then(throwError).then((v) => v.json()).then(setInvitations)
            .then(() => fetch(`${baseUrl}/team`, { credentials: "include" })).then(throwError).then(v => v.json()).then(v => { setTeam(v); return v })
            .catch((e) => { throwTextError(e); console.error(e); });
        console.log(user);
    }

    const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    };

    const dateObj = new Date(user.dob);
    const formattedDate = dateObj.toLocaleDateString("en-GB", options);

    const deleteEvent = (eventId) => {
        Swal.fire({
            title: "Do you want to leave this event!!",
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
                fetch(`${baseUrl}/event/join/individual`, { method: "DELETE", credentials: "include", body: new URLSearchParams({ "id": eventId }), headers: { "Content-Type": "application/x-www-form-urlencoded" } })
                    .then(throwError).then(throwError).then((result) => {
                        // setErrorMade({ title: "Success", message: result.data.message });
                        setIsLoading(false);
                        if (result.ok) {
                            fetch(`${baseUrl}/event/joined/individual`, { credentials: "include" }).then(throwError).then((v) => v.json()).then(setEvents)
                                .catch((e) => { throwTextError(e); console.error(e); });
                        }
                    })
                    .catch((e) => {
                        throwTextError(e);
                        console.log(e)
                    });
            }
        });
    };


    //get user id from the context api

    const isMobile = useMediaQuery("(max-width:450px)");


    return (
        <>
            {isLoading && <Loader />}
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
                                                onClick={() => fetch(`${baseUrl}/auth/verify`, { method: "POST", credentials: "include" }).then(throwError).catch(throwTextError)}
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
                                            Events Registered Individually
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
                                                {workshops &&
                                                    workshops.length === 0 &&
                                                    "Not registered to any workshop 🙄."}
                                                {workshops &&
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
                                                                    key={workshop.id}
                                                                >
                                                                    {workshop.name}
                                                                </Typography>
                                                                <Divider
                                                                    sx={{
                                                                        border: "0.2px solid grey",
                                                                        width: 400,
                                                                    }}
                                                                />
                                                            </Box>
                                                        );
                                                    })}
                                            </Grid>
                                            <Grid item xs={6} sx={{ textAlign: "right" }}>
                                                {workshops &&
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
                                                    })}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>

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
                                    setTeams={setTeam}
                                />
                            </Box>
                        </Card>
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
                                />
                            </Box>
                        </Card>}
                    </div>
                </div>
            ) : (
                <>
                    <Loader />
                </>
            )
            }
        </>
    );
};

export default UserDashboard;
