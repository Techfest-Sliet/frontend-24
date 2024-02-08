import "./ComingSoon.css";

import StarCanvas from "../../screens/landingPage/StarbackGround";
import { Box } from "@mui/material";

const ComingSoon = () => {
  return (
    <>
      <StarCanvas />

      <Box
        // className="coming-soon-body"
          className="bg-polygon"
        sx={{
          position: "relative",
          minWidth: "100%",
          // border: "1px solid red",
          // height: "80vh",
          zIndex: "26",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4rem",
          clipPath:
            "polygon(0 0, 100% 0  , 100% 100%, 75% 100%, 65% 85% ,35% 85%, 25% 100% , 0 100%  )",
        }}
      >
        <Box
           className="polygon-container"
          sx={{
            marginTop: "2rem",
            // border: "1px solid red",
            width: "90%",
            height: "75%",
            backgroundColor: "#90e0ef34",
            // paddingTop: "8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="content">
            <h3>COMINGSOON</h3>
            <h3>COMINGSOON</h3>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ComingSoon;
