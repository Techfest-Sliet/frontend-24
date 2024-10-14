import React, { useState, useContext, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { baseUrl } from "../../API/api";
import { useNavigate } from "react-router-dom";
import GroupAdd from "@mui/icons-material/GroupAdd";
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const throwError = (e) => {
    if (!e.ok) {
        if (e.status === 409) {
            Swal.fire({
                title: "Error!",
                text: `Already Sent request`,
                icon: "error",
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: `Unexpected Error: ${e.statusText}`,
                icon: "error",
            });
        }
    }
    return e;
};

const throwTextError = (e) => {
    Swal.fire({
        title: "Error!",
        text: `Unexpected Error: ${e}`,
        icon: "error",
    });
};

const updateTeams = (setTeams) =>
    fetch(`${baseUrl}/team`, { credentials: "include" })
        .then(throwError)
        .then((v) => v.json())
        .then((v) => {
            setTeams(v);
            return v;
        })
        .catch((e) => {
            throwTextError(e);
            console.error(e);
        });

function TeamTable({ teams, setTeams }) {
    const [addMember, setAddMember] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/profile`, { credentials: "include" })
            .then(throwError)
            .then((v) => v.json())
            .then((u) => {
                setUser(u);
                return u;
            });
    }, [])

    const handleTeamDelete = (id) => {
        Swal.fire({
            title: "Do you want to delete this team!!",
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
        })
            .then(
                (response) =>
                    response.isConfirmed &&
                    fetch(`${baseUrl}/team?id=${id}`, {
                        method: "DELETE",
                        credentials: "include",
                    })
            )
            .then(throwError)
            .then((r) => r.ok && updateTeams(setTeams))
            .catch(throwTextError);
    };

    const addTeamMember = (teamId) => {
        if (email.trim().length === 0) {
            alert("fill the email field");
        }
        setAddMember(false);
        fetch(`${baseUrl}/team/request`, {
            method: "POST",
            credentials: "include",
            body: new URLSearchParams({ team_id: teamId, email: email }),
        })
            .then(throwError)
            .then(
                (resp) =>
                    resp.ok &&
                    Swal.fire({
                        text: `Request Sent`,
                        confirmButtonColor: "#0096FF",
                        customClass: {
                            confirmButton: "order-2",
                        },
                    })
            )
            .catch(throwTextError);
    };

    const isMobile = useMediaQuery("(max-width:450px)");
    return (
        user && (
            <>
                <div
                    className="heading"
                    style={{ width: "100%", display: "flex", marginLeft: "auto" }}
                >
                    <Typography
                        style={{
                            color: "white",
                            fontSize: 30,
                            // fontWeight: 600,
                        }}
                    >
                        Team Table :
                    </Typography>
                    <Button
                        className="addBtn"
                        variant=" "
                        onClick={() => {
                            navigate("/addteam");
                        }}
                    >
                        <GroupAdd />
                    </Button>
                </div>
                <TableContainer>
                    <Table
                        sx={{
                            width: isMobile ? 35 : 1000,
                        }}
                        aria-label="customized table"
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell
                                    align="center"
                                    style={{ backgroundColor: "transparent", color: "white" }}
                                >
                                    Team Name
                                </StyledTableCell>
                                <StyledTableCell
                                    align="center"
                                    style={{ backgroundColor: "transparent", color: "white" }}
                                >
                                    Member Email
                                </StyledTableCell>
                                <StyledTableCell
                                    align="center"
                                    style={{ backgroundColor: "transparent", color: "white  " }}
                                >
                                    Events Joined
                                </StyledTableCell>
                                <StyledTableCell
                                    align="center"
                                    style={{ backgroundColor: "transparent", color: "white  " }}
                                >
                                    Add Member
                                </StyledTableCell>
                                <StyledTableCell
                                    align="center"
                                    style={{ backgroundColor: "transparent", color: "white  " }}
                                >
                                    Delete Team
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {teams &&
                                Object.values(teams).map((team) => {
                                    console.log(team);
                                    return (
                                        <StyledTableRow
                                            key={team.id}
                                            style={{ height: "6rem", border: "2px solid white" }}
                                        >
                                            <StyledTableCell
                                                component="th"
                                                scope="row"
                                                align="center"
                                                style={{ background: "transparent", height: "2rem", color: "white" }}
                                            >
                                                {team.name}
                                            </StyledTableCell>

                                            <StyledTableCell
                                                component="th"
                                                scope="row"
                                                align="center"
                                                style={{ background: "transparent", height: "2rem", color: "white" }}
                                            >
                                                {team.members &&
                                                    team.members.map((eachMember) => {
                                                        return (
                                                            <>
                                                                <StyledTableRow>
                                                                    <StyledTableCell
                                                                        component="th"
                                                                        scope="row"
                                                                        style={{
                                                                            background: "transparent",
                                                                            width: "15rem",
                                                                        }}
                                                                        key={eachMember.id}
                                                                        className={
                                                                            eachMember.verified
                                                                                ? "verified"
                                                                                : "notVerified"
                                                                        }
                                                                        align="center"
                                                                    >
                                                                        <Typography
                                                                            style={{
                                                                                color:
                                                                                    eachMember.verified === true
                                                                                        ? "green"
                                                                                        : "red",
                                                                                width: "100%",
                                                                            }}
                                                                        >
                                                                            {eachMember.email}
                                                                        </Typography>
                                                                    </StyledTableCell>
                                                                    <StyledTableCell
                                                                        align="center"
                                                                        style={{
                                                                            backgroundColor: "transparent",
                                                                            width: "10rem",
                                                                            color: "white",
                                                                        }}
                                                                    >
                                                                        <Typography>
                                                                            {eachMember.verified
                                                                                ? "verified"
                                                                                : "notVerified"}
                                                                        </Typography>
                                                                    </StyledTableCell>
                                                                </StyledTableRow>
                                                            </>
                                                        );
                                                    })}
                                            </StyledTableCell>
                                            <StyledTableCell
                                                component="th"
                                                scope="row"
                                                align="center"
                                                style={{ background: "transparent", height: "2rem", color: "white" }}
                                            >
                                                {team.events &&
                                                    team.events.map((eachEvent) => {
                                                        return (
                                                            <>
                                                                <StyledTableRow>
                                                                    <StyledTableCell
                                                                        component="th"
                                                                        scope="row"
                                                                        style={{
                                                                            background: "transparent",
                                                                            width: "15rem",
                                                                        }}
                                                                        key={eachEvent.id}
                                                                        align="center"
                                                                    >
                                                                        <Typography
                                                                            style={{
                                                                                width: "100%",
                                                                                color: "white",
                                                                            }}
                                                                        >
                                                                            {eachEvent.name}
                                                                        </Typography>
                                                                    </StyledTableCell>
                                                                </StyledTableRow>
                                                            </>
                                                        );
                                                    })}
                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="center"
                                                style={{ background: "transparent" }}
                                            >
                                                {team &&
                                                    team.members &&
                                                    team.members.some(
                                                        (u) => u.email === user.email && u.is_leader
                                                    ) && (
                                                        <Button
                                                            onClick={() => {
                                                                setAddMember(true);
                                                            }}
                                                        >
                                                            Add Member
                                                        </Button>
                                                    )}
                                            </StyledTableCell>

                                            <StyledTableCell
                                                align="center"
                                                style={{ background: "transparent" }}
                                            >
                                                {team &&
                                                    team.members &&
                                                    team.members.some(
                                                        (u) => u.email === user.email && u.is_leader
                                                    ) && (
                                                        <Button
                                                            onClick={() => {
                                                                handleTeamDelete(team.id);
                                                            }}
                                                        >
                                                            Delete Team
                                                        </Button>
                                                    )}
                                            </StyledTableCell>

                                            {addMember && (
                                                <Modal
                                                    open={addMember}
                                                    onClose={() => {
                                                        setAddMember(false);
                                                    }}
                                                >
                                                    <Box sx={style}>
                                                        <TextField
                                                            id="filled-basic"
                                                            label="Member Email"
                                                            variant="filled"
                                                            onChange={(e) => {
                                                                setEmail(e.target.value);
                                                            }}
                                                        />
                                                        <Button
                                                            variant="contained"
                                                            style={{
                                                                display: "flex",
                                                                marginLeft: "auto",
                                                            }}
                                                            onClick={() => addTeamMember(team.id)}
                                                        >
                                                            OK
                                                        </Button>
                                                    </Box>
                                                </Modal>
                                            )}
                                        </StyledTableRow>
                                    );
                                })}
                        </TableBody>
                        {/*teamMembers.length === 0 && (
            <Typography> No team created</Typography>
          )*/}
                    </Table>
                </TableContainer>
            </>
        )
    );
}

export default TeamTable;
