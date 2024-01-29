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
      }}
    >
      <Stack
        height="90%"
        width="95%"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={
          {
            //   border: "1px solid red",
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
            height={300}
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
          <div style={{ display: "flex", border: "1px solid red" }}>
            <img src="/F.png" alt="flogo" height={250} />
            <div>
              <p>uture</p>
              <div>
                <p></p>
                <p>rge</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Stack>
    </div>
  );
};

export default Hero;
