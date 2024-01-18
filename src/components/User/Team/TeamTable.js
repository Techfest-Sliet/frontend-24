import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Button, Tooltip } from "@mui/material";

import TeamNameChange from "./modal/TeamNameChange";
import DeleteModal from "./modal/Delete";

//icons
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoMdAddCircle } from "react-icons/io";
import AddTeamMember from "../addTeam/AddTeamMember";

function createData(teamName, leader, memberName, action, event) {
  return { teamName, leader, memberName, action, event };
}

function TeamTable() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddMemeberModal, setOpenAddMemberModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]); 
  const [isVerified, setIsVerified] = useState(false);

  const rows = [createData("fighter", "naman", "gaurav", "No", "LFR")];

  //modal rendering
  const handleEditClose = () => {
    setOpenEditModal(false);
  };
  const confirmDelete = () => {
    setOpenDeleteModal(false);
  };

  const handleAddMemberClose = () => {
    setOpenAddMemberModal(false);
  }

  //add team members
  const handleAddMembers = (memberName) => {
    setTeamMembers((prevMember) => [...prevMember, memberName]);
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
            width: 1000,
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
                <b>Memeber Name</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "whitesmoke" }}>
                <b>Action</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "whitesmoke" }}>
                <b>Event</b>
              </TableCell>
              <TableCell align="right" sx={{ color: "whitesmoke" }}>
                <b>Member Email- Status</b>
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
                  <p>{row.teamName}</p>
                  <Button
                    onClick={() => {
                      setOpenEditModal(true);
                    }}
                    variant=""
                  >
                    <FaEdit />
                  </Button>
                  {openEditModal && (
                    <TeamNameChange handleClose={handleEditClose} />
                  )}
                </TableCell>

                <TableCell align="right" sx={{ color: "white" }}>
                  <p>{row.leader}</p>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "white", display: "flex" }}
                >
                  <p>{row.memberName}</p>
                  <Tooltip title="Add Member" placement="bottom-end">
                    <Button
                      variant=""
                      onClick={() => {
                        setOpenAddMemberModal(true);
                      }}
                    >
                      <IoMdAddCircle/>
                    </Button>
                  </Tooltip>
                  {openAddMemeberModal && <AddTeamMember handleClose={handleAddMemberClose}/>}
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  {row.action}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "whitesmoke", display: "flex" }}
                >
                  <p>{row.event}</p>
                  <Button
                    variant=""
                    onClick={() => {
                      setOpenDeleteModal(true);
                    }}
                  >
                    <MdDelete />
                  </Button>
                  {openDeleteModal && (
                    <DeleteModal handleClose={confirmDelete} />
                  )}
                </TableCell>
                <TableCell align="right">
                  {isVerified && <FaCheck color="green" />}
                  {!isVerified && <ImCross color="red" />}
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TeamTable;
