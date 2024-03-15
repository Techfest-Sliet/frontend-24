import React, { useState, useContext } from "react";
import StarCanvas from "../landingPage/StarbackGround";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, useMediaQuery } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { Modal } from "@mui/material";
import AuthContext from "../../components/Auth/Auth";
import { Verified } from "@mui/icons-material";

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

const rows = [];

function TeamTable(teamMembers) {
  console.log(teamMembers.teamMembers);
  const authContext = useContext(AuthContext);
  const [members, setMembers] = useState(teamMembers.teamMembers);

  const isMobile = useMediaQuery("(max-width:450px)");
  return (
    <>
      <div
        className="Team"
        style={{
          position: "relative",
          zIndex: "10",
          marginTop: "4.5rem",
          marginRight: "10%",
          marginLeft: "5%",
          overflowX: "scroll",
        }}
      >
        <Typography
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            marginTop: "4.5rem",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          Team Table
        </Typography>
        <TableContainer>
          <Table
            sx={{
              midth: 200,
              width: isMobile ? 35 : 1000,
              margin: isMobile ? 1 : 20,
              marginLeft: isMobile ? 0 : 35,
            }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Team Name</StyledTableCell>
                <StyledTableCell align="right">Event Name</StyledTableCell>
                <StyledTableCell align="right">Members</StyledTableCell>
                <StyledTableCell align="right">Leader Name</StyledTableCell>
                <StyledTableCell align="right">Payment Status</StyledTableCell>
                <StyledTableCell align="right">..</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members &&
                members.length > 0 &&
                members.map((team) => {
                  return (
                    <StyledTableRow key={team._id}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        style={{ background: "grey" }}
                      >
                        {team.teamName}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ background: "grey" }}
                      >
                        {team.eventName}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ background: "grey" }}
                      >
                        {team.memberDetails.map((eachMember) => {
                            <StyledTableCell
                            component="th"
                            scope="row"
                            style={{ background: "grey" }}
                            key={eachMember.memberId}
                            className={
                              eachMember.status ? "verified" : "notVerified"
                            }
                          >
                            {eachMember.email}
                          </StyledTableCell>;
                          <StyledTableRow>
                            {eachMember.status ? "verified" : "notVerified"}
                          </StyledTableRow>
                        })}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ background: "grey" }}
                        >
                        {team.leaderName}
                      </StyledTableCell>
                      <StyledTableCell
                      align="right"
                      style={{ background: "grey" }}
                      >
                        not paid
                      </StyledTableCell>
                      <StyledTableCell
                      align="right"
                      style={{ background: "grey" }}
                      >
                        <MdDelete color="white" />
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
            {teamMembers.length === 0 && (
              <Typography> No team created</Typography>
            )}
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default TeamTable;
