import { Box, Stack } from "@mui/system";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../constants";

const Hero = () => {
  return (
    <div
      style={{
        color: "white",
        width: "100%",
        height: "100%",
        // border: "1px solid red",
        zIndex: "6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10rem",
      }}
    >
      <Stack
        height="90%"
        width="100%"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={
          {
              // border: "1px solid red",
          }
        }
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: "1.2rem",
          }}
        >
          <img
            src="/festLogo.png"
            alt="fest logo"
            height={350}
            style={{
              marginLeft:"-3.5rem",
              opacity: "0.7",
              filter: "drop-shadow(8px 8px 15px #4444dd)",
            }}
          />
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src="/F.png" alt="flogo" height={250} />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
            >
              <p style={{ width: "100%", fontSize: "6rem", height: "35%" }}>
                uture
              </p>
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                
                <p
                  style={{
                    left: "-6rem",
                    bottom: "1.3rem",
                    border: "9px solid ",
                    width: "11rem",
                    height: "5.6rem",
                    borderRadius:"2rem",

                    position: "absolute",
                    // borderColor:"transparent",
                    borderColor:"transparent transparent transparent linear-gradient(to right, #ffffff, #b7b4b2, #ccd0d4, #4d4c47)"
                  }}
                ></p>
                <p style={{ fontSize: "6rem",paddingLeft:"5rem" }}>rge</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Stack>
    </div>
  );
};

export default Hero;
