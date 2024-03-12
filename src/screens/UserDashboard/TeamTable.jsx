import React from "react";
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

function TeamTable() {
  const isMobile = useMediaQuery("(max-width:450px)");
  return (
    <>
      <StarCanvas />
      <div
        className="Team"
        style={{
          position: "relative",
          zIndex: "10",
          marginTop: "4.5rem",
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
            fontWeight:600,
          }}
        >
          Team Table
        </Typography>
        <TableContainer>
          <Table
            sx={{
              minWidth: 400,
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
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ background: "grey" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{ background: "grey" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{ background: "grey" }}
                  ></StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{ background: "grey" }}
                  ></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default TeamTable;
