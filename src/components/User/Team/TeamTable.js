import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import TeamNameChange from "../../modal/modal";
import { useEffect } from "react";

function createData(teamName, leader, emailStatus, event, action) {
  return { teamName, leader, emailStatus, event, action };
}

function TeamTable() {
  const [isEdit, setIsEdit] = useState(false);

  const rows = [
    createData('fighter', 'naman', 'notAccepted', 'LFR', 'no')
  ];

  const editName =  () =>{
    console.log("Button Clicked");
 }

  return (
    <>
      <TableContainer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Table
          sx={{
            width: 600,
            backgroundColor: "grey",
            margin: "10%",
            borderRadius: "5px",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "whitesmoke" }}>
                {" "}
                <b>Team Name</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "whitesmoke" }}>
                <b>Leader</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "whitesmoke" }}>
                <b>Member Email- Status</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "whitesmoke" }}>
                <b>Event</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "whitesmoke" }}>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.teamName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: "whitesmoke", display: "flex" }}
                >
                  <p>fighter</p>
                  {/* <div
                    className="editIcon"
                    style={{
                      width: "15px",
                      height: "15px",
                      color: "silver",
                      border: "2px solid grey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems:"center",
                      borderRadius:"5px",
                      margin:"5px"
                    }}
                    onClick={editTeamName}
                  >
                    <FaEdit />
                  </div> */}
                  <button onClick={editName}><FaEdit/></button>
                  {isEdit && <TeamNameChange />}
                </TableCell>

                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TeamTable;
