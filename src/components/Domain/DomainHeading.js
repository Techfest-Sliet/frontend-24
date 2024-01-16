import React from "react";

const domainHeading = (props) => {
  return (
    <>
      <h2 style={{color:"white"}}>{props.domain.name}</h2>
    </>
  );
};

export default domainHeading;
