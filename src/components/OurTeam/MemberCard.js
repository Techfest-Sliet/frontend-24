import React from "react";
import Naruto from "../../images/Naruto.jpg";
import "./MemberCard.css";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Tooltip } from "@mui/material";

const MemberCard = ({ name, post, linkedIn, mail, image }) => {
  function handleEmail() {
    navigator.clipboard.writeText(mail);
  }

  return (
    <>
      <div class="container">
        <div class="card">
          <div class="img-box">
            <img src={image} />
          </div>
          <div class="content">
            <p>{name}</p>
            <p>{post}</p>
            <a href={linkedIn}>
              <img
                className="icon"
                src="https://img.icons8.com/ios/50/1A1A1A/linkedin.png"
                alt="linkedin"
              />
            </a>
            <Tooltip title="Copy Email">
              <button
                href={mail}
                style={{ background: "transparent", border: "none" }}
                onClick={handleEmail}
              >
                <img
                  className="icon"
                  src="https://img.icons8.com/ios/50/1A1A1A/mail.png"
                  alt="mail"
                />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
