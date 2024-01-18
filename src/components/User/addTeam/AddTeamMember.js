import React, {useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  Typography,
} from "@mui/material";

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
  display:"flex",
};

function AddTeamMember({ handleClose, handleAddMembers }) {

  const [newMemberName, setNewMemberName] = useState('');
  // const [InputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    handleAddMembers(newMemberName);
    setNewMemberName('');
    handleClose();
  }

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
            <div className="form">
              <Typography>Enter the New Team Member.</Typography>
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "25ch" }}
              >
                <Input
                  id="standard-adornment-weight"
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  value={newMemberName}
                  onChange={(e) => {
                    setNewMemberName(e.target.value);
                  }}  
                />
                <FormHelperText id="standard-weight-helper-text">
                  New Team Member Name
                </FormHelperText>
              </FormControl>
            </div>
            <div className="okbtn" style={{ marginLeft: "auto", marginTop:"auto" }}>
              <Button
                variant="contained"
                onClick={handleSubmit}
              >
                OK
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddTeamMember;
