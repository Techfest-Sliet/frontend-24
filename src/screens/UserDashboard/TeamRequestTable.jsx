import React, { useState, useContext, useEffect } from "react";
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

const updateRequests = (setRequests) =>
    fetch(`${baseUrl}/team/request`, { credentials: "include" }).then(throwError).then(v => v.json()).then(setRequests)
        .catch((e) => { throwTextError(e); console.error(e); })

const acceptRequest = (team) =>
    Swal.fire({
        title: "Do you want to accept this request?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
        backdrop: true,
        customClass: {
            actions: "my-actions",
            cancelButton: "order-1 right-gap",
            confirmButton: "order-2",
            denyButton: "order-3",
        },
    }).then(response => response.isConfirmed && fetch(`${baseUrl}/team/request?id=${team.team_id}`, { method: "PUT", credentials: "include" }).then(throwError)).catch(throwTextError)

const rejectRequest = (team) =>
    Swal.fire({
        title: "Do you want to reject this request?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
        backdrop: true,
        customClass: {
            actions: "my-actions",
            cancelButton: "order-1 right-gap",
            confirmButton: "order-2",
            denyButton: "order-3",
        },
    }).then(response => response.isConfirmed && fetch(`${baseUrl}/team/request?id=${team.team_id}`, { method: "DELETE", credentials: "include" })).then(throwError).catch(throwTextError)



function TeamRequestTable() {

    const [request, setRequest] = useState(null);
    if (!request) {
        updateRequests(setRequest)
    }

    const isMobile = useMediaQuery("(max-width:450px)");
    return (
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
                                Leader Name
                            </StyledTableCell>
                            <StyledTableCell
                                align="center"
                                style={{ backgroundColor: "transparent", color: "white  " }}
                            >
                                Accept Invitation
                            </StyledTableCell>
                            <StyledTableCell
                                align="center"
                                style={{ backgroundColor: "transparent", color: "white  " }}
                            >
                                Reject Invitation
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {request &&
                            request.length > 0 &&
                            Object.values(request).map((team) => {
                                return (
                                    <StyledTableRow
                                        key={team.team_id}
                                        style={{ height: "6rem", border: "2px solid white" }}
                                    >
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                            align="center"
                                            style={{ background: "transparent", height: "2rem" }}
                                        >
                                            {team.team_name}
                                        </StyledTableCell>

                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                            align="center"
                                            style={{ background: "transparent", height: "2rem" }}
                                        >
                                            {team.leader_name}
                                        </StyledTableCell>

                                        <StyledTableCell
                                            align="center"
                                            style={{ background: "transparent" }}
                                        >
                                            <Button
                                                onClick={() => {
                                                    acceptRequest(team).then(updateRequests(setRequest))
                                                }}
                                            >
                                                Accept
                                            </Button>
                                        </StyledTableCell>
                                        <StyledTableCell
                                            align="center"
                                            style={{ background: "transparent" }}
                                        >
                                            <Button
                                                onClick={() => {
                                                    rejectRequest(team).then(updateRequests(setRequest))
                                                }}
                                            >
                                                Reject
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default TeamRequestTable;
