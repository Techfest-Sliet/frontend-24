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
import { Button, Typography, useMediaQuery } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { Modal } from "@mui/material";
import AuthContext from "../../components/Auth/Auth";
import { Verified } from "@mui/icons-material";
import { IoMdPersonAdd } from "react-icons/io";
import { Box, TextField } from "@mui/material";

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

function TeamTable(teamMembers) {
  console.log(teamMembers.teamMembers);
  const authContext = useContext(AuthContext);
  const [members, setMembers] = useState(teamMembers.teamMembers);
  const [addMember, setAddMember] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamMemberEmail, setTeamMemberEmail] = useState("");
  const [teamMemberPhone, setTeamMemberPhone] = useState("");
  const [fieldErr, setFieldErr] = useState(null);

  const addTeamMember = () => {
    // if (
    //   !teamMemberEmail.trim.includes("@") ||
    //   teamMemberPhone.trim().length === 0 ||
    //   teamName.trim().length === 0
    // ) {
    //   setFieldErr("Invalid Values");
    //   setTimeout(() => {
    //     setFieldErr(null);
    //   }, 3000);
    //   return;
    // }

    setAddMember(false);
  };

  const isMobile = useMediaQuery("(max-width:450px)");
  return (
    <>
      <StarCanvas />
      <div
        className="Team"
        style={{
          position: "relative",
          zIndex: "30",
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
                <StyledTableCell>
                  Team Name
                  <Button
                    variant=" "
                    onClick={() => {
                      setAddMember(true);
                    }}
                  >
                    <IoMdPersonAdd />
                  </Button>
                  {addMember && (
                    <Modal
                      open={true}
                      onClose={() => {
                        setAddMember(false);
                      }}
                      aria-labelledby="child-modal-title"
                      aria-describedby="child-modal-description"
                    >
                      <Box sx={style}>
                        <Typography>Add Team Member's Details</Typography>
                        <TextField
                          id="standard-basic"
                          label="Team Name"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                          onChange={(e) => setTeamName(e.target.value)}
                        />
                        {fieldErr && (
                          <>
                            <Typography style={{ color: "red" }}>
                              {fieldErr}
                            </Typography>
                          </>
                        )}
                        <TextField
                          id="standard-basic"
                          label="Email"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                          onChange={(e) => setTeamMemberEmail(e.target.value)}
                        />
                        <TextField
                          id="standard-basic"
                          label="Phone Number"
                          variant="standard"
                          sx={{ marginBottom: 2 }}
                          onChange={(e) => setTeamMemberPhone(e.target.value)}
                        />
                        <Button
                          variant="contained"
                          style={{
                            display: "flex",
                            marginLeft: "auto",
                          }}
                          onClick={addTeamMember}
                        >
                          OK
                        </Button>
                      </Box>
                    </Modal>
                  )}
                </StyledTableCell>
                <StyledTableCell align="right">Event Name</StyledTableCell>
                <StyledTableCell align="right">Members</StyledTableCell>
                <StyledTableCell align="right">Leader Name</StyledTableCell>
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
                          </StyledTableRow>;
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
