import { Box, Stack } from "@mui/system";

import {  motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../constants";
import "./Hero.css";

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
        direction={{xs:"column",lg:"row"}}
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
            className="festlogo"
            src="/festLogo.png"
            alt="fest logo"
            height={350}
            style={{
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
            <img src="/F.png" alt="flogo" height={250} className="future-logo" />
            <div className="text-container"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p style={{ width: "100%"}} className="uture" >
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
                 className="o-shape"
                  style={{
                    
                    border: "9px solid ",
                    
                    borderRadius:"2rem",

                    position: "absolute",
                    // borderColor:"transparent",
                    borderColor:"transparent transparent transparent linear-gradient(to right, #ffffff, #b7b4b2, #ccd0d4, #4d4c47)"
                  
                  }}
                ></p>
                <p className="rge">rge</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Stack>
    </div>
  );
};

export default Hero;
