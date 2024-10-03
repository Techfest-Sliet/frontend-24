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

function TeamRequestTable({ setInvitations }) {

	const [request, setRequest] = useState(null);
    if (!request) {
        fetch(`${baseUrl}/team/request`, { credentials: "include" }).then(v => v.json()).then(setRequest);
    }

	setInvitations(request)

    const handleTeamDelete = (id) => {
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
                fetch()
                    .post(
                        `${baseUrl}/team/delete`,
                        { id },
                    )
                    .then((result) => {
                        window.location.reload();
                    });
            }
        });
    };


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
                                                    fetch(`${baseUrl}/team/request?id=${team.team_id}`, { method: "PUT", credentials: "include" }).then(
                                                        () =>
                                                            setRequest(null)
                                                    )
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
                                                    fetch(`${baseUrl}/team/request?id=${team.team_id}`, { method: "DELETE", credentials: "include" }).then(
                                                        () =>
                                                            setRequest(null)
                                                    )
                                                }}
                                            >
                                                Reject
                                            </Button>
                                        </StyledTableCell>
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
    );
}

export default TeamRequestTable;
