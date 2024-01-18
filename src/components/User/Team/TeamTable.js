import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, FormControl, FormHelperText, Input, Typography } from "@mui/material";

function createData(teamName, leader, emailStatus, event, action) {
  return { teamName, leader, emailStatus, event, action };
}

// team name change modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#adadc9",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

function TeamNameChange({handleClose}) {


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        open={true}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={true}>
          <Box sx={style}>
            <Typography>Enter the New Team Name.</Typography>
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "25ch" }}>
              <Input
                id="standard-adornment-weight"
                aria-describedby="standard-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
              <FormHelperText id="standard-weight-helper-text">
                New Team Name
              </FormHelperText>
            </FormControl>
            <Button variant="contained" onClick={handleClose} style={{marginLeft:"auto"}}>
                OK
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

function TeamTable() {
  const [isEdit, setIsEdit] = useState(false);

  const handleClose = () => {
    setIsEdit(false);
  }
  const rows = [createData("fighter", "naman", "notAccepted", "LFR", "no")];

  const editName = () => {
    console.log("Button Clicked");
    setIsEdit(true);
  };

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
                  <Button onClick={editName} variant="">
                    <FaEdit />
                  </Button>
                  {isEdit && <TeamNameChange handleClose={handleClose} />}
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
