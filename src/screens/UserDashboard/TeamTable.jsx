import React, { useState, useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { Modal } from "@mui/material";
import AuthContext from "../../components/Auth/Auth";
import { IoMdPersonAdd } from "react-icons/io";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../API/api";
import { useNavigate } from "react-router-dom";
import GroupAdd from "@mui/icons-material/GroupAdd";

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

function TeamTable({ teamMembers, events }) {
  const authContext = useContext(AuthContext);
  const [addMember, setAddMember] = useState(false);
  const [teamMemberEmail, setTeamMemberEmail] = useState(""); 

  const navigate = useNavigate();

  const handleTeamDelete = (id) => {
    axios
      .post(
        `${baseUrl}/team/delete`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${authContext.token}`,
          },
        }
      )
      .then((result) => {
        window.location.reload();
      });
  };

  const addTeam = (e, index) => {
    e.preventDefault();

    axios
      .post(
        `${baseUrl}/team/create`,
        {
          teamName: teamMembers[index].teamName,
          teamMembers,
        },
        {
          headers: {
            Authorization: "Bearer " + authContext.token,
          },
        }
      )
      .then((result) => {
        console.log("team create ==>", result.data);
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
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                Status
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
            {teamMembers &&
              teamMembers.length > 0 &&
              Object.values(teamMembers).map((team, index) => {
                return (
                  <StyledTableRow key={team._id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      align="center"
                      style={{ background: "grey" }}
                    >
                      {team.teamName}
                    </StyledTableCell>

                    {team.members.map((eachMember) => {
                      return (
                        <>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            style={{ background: "grey" }}
                            key={eachMember.memberId}
                            className={
                              eachMember.status ? "verified" : "notVerified"
                            }
                            align="center"
                          >
                            <Typography
                              style={{
                                color:
                                  eachMember.status === true ? "green" : "red",
                              }}
                            >
                              {eachMember.email}
                            </Typography>
                          </StyledTableCell>
                          <StyledTableCell
                            align="center"
                            style={{ backgroundColor: "grey" }}
                          >
                            {eachMember.status ? "verified" : "notVerified"}
                          </StyledTableCell>
                        </>
                      );
                    })}
                    <StyledTableCell
                      align="center"
                      style={{ background: "grey" }}
                    >
                      {team.leaderName}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ background: "grey" }}
                    >
                      <Button
                        onClick={() => {
                          setAddMember(true);
                        }}
                      >
                        <IoMdPersonAdd color="white" />
                      </Button>
                      {/* {addMember && (
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
                                setTeamMemberEmail(e.target.value);
                              }}
                            />
                          </Box>
                          <Button
                            variant="contained"
                            style={{
                              display: "flex",
                              marginLeft: "auto",
                            }}
                            onClick={(e) => addTeam(e, index)}
                          >
                            OK
                          </Button>
                        </Modal>
                      )} */}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ background: "grey" }}
                    >
                      <Button
                        onClick={() => {
                          handleTeamDelete(team._id);
                        }}
                      >
                        <MdDelete color="white" />
                      </Button>
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
    </>
  );
}

export default TeamTable;
