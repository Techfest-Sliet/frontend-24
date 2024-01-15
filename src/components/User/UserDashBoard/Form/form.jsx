import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./form.css";
import { Divider } from "@mui/material";

function UserForm() {
  const [usernameoremail, setUsernameoremail] = useState("");
  const [email, setEmail] = useState(" ");
  const [branch, setBranch] = useState(" ");
  const [whatsappNo, setWhatsappNo] = useState(0);
  return (
    <>
      <div className="form">
        <main className="register">
          <div className="register_container">
            <h1 className="register_logo_heading">
              Hi! <span className="app_name">Naman Kulshresth</span>👋
            </h1>

            <div className="register_google"></div>
            <div className="register_field">
              <p style={{color:"grey"}}>Username</p>
              <Divider style={{backgroundColor:"#4d4c5c"}}/>
              <p style={{color:"grey"}}>Email</p>
              <Divider style={{backgroundColor:"#4d4c5c"}}/>
              <p style={{color:"grey"}}>Branch</p>
              <Divider style={{backgroundColor:"#4d4c5c"}}/>
              <p style={{color:"grey"}}>Whatsapp No.</p>
              <Divider style={{backgroundColor:"#4d4c5c"}}/>
              <details style={{ color: "darkgrey" }}>
                <summary>Your Team</summary>
                <p>hi </p>
              </details>

              <div className="register_field_button">
                <p className="register_account_text">
                  <Link to="/">
                    <span className="register_login_link">Register</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default UserForm;
