import React from "react";
import Naruto from "../../images/Naruto.jpg";
import "./MemberCard.css";

const MemberCard = ({name, post}) => {
  return (
    <div class="container">
      <div class="card">
        <div class="img-box">
          <img src={Naruto} />
        </div>
        <div class="content">
          <p>{name}</p>
          <p>{post}</p>
          <a href="#">
            <img
              className="icon"
              src="https://img.icons8.com/ios/50/1A1A1A/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="#">
            <img
              className="icon"
              src="https://img.icons8.com/ios/50/1A1A1A/twitterx--v1.png"
              alt="twitterx"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
