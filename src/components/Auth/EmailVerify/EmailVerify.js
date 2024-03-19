import React from "react";
import { Typography } from "@mui/material";
import './EmailVerify.css'

const EmailVerify = () => {
  return (
    <div>
      <div className="emailVerify" style={{marginTop:"4.5rem"}}>
        <div className="bgImage"></div>
        <Typography style={{ color: "white" }}>
          Check your registered email to verify your account.
        </Typography>
      </div>
    </div>
  );
};

export default EmailVerify;
