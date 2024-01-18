import React from "react";
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
};

function DeleteModal({ handleClose }) {
  return (
    <>
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
              <Typography style={{ color: "red" }}>
                Do you really wish to delete this event !! 😧{" "}
              </Typography>
              <div className="cnfbtn" style={{display:"flex"}}>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  style={{ marginTop: "10px", backgroundColor:"red" }}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  style={{ marginTop: "10px", marginLeft:"auto" }}
                >
                  No
                </Button>
                
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

export default DeleteModal;
