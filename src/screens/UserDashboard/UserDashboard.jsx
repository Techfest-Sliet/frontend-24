import React from "react";
import TeamTable from "../../components/User/Team/TeamTable";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BiSolidInstitution } from "react-icons/bi";
import { Button, Tooltip } from "@mui/material";
import update from "../../images/update.png";
import { useNavigate } from "react-router-dom";

// import "./UserDashboard.css";

// const Bg = () => {
//   const glb = useGLTF("/space_boi.glb");

//   return (
//     <>
//       <mesh>
//         <primitive object={glb.scene} position={[0, -0.5, 3.5]} scale={0.2} />;
//       </mesh>
//     </>
//   );
// };

const UserDashboard = () => {

const navigate = useNavigate();

const updateUser = () => {
  navigate('/updateuser');
}

  return (
    <>
      <header
        className="animated-title"
        style={{
          width: "100%",
          height: "10%",
          display: "flex",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2.5rem",
          fontWeight: 700,
        }}
      >
        User Dashboard
      </header>
      <div
        className="userDashboard"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div className="canvas" style={{ width: "50%", height: "100vh" }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense>
              <OrbitControls
                minDistance={0}
                maxDistance={5}
                enableRotate={false}
                enablePan={false}
                enableZoom={false}
              />
            </Suspense>
            <Bg />
          </Canvas>
        </div> */}
        <div className="userinfo">
          <div
            className="greeting"
            style={{
              color: "white",
              fontSize: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
              marginBottom: "2rem",
            }}
          >
            {" "}
            Hi!&nbsp;{" "}
            <span style={{ color: "#25c6e5", fontWeight: 700 }}>
              Naman Kulshresth
            </span>
            👋
          </div>
          <div
            className="userInfo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <div className="email">
              <CiMail /> 2140101@sliet.ac.in |&nbsp;
            </div>
            <div className="whatsappNo">
              {" "}
              <CiPhone /> 9881192604 |&nbsp;
            </div>
            <div className="college">
              <BiSolidInstitution /> SLIET |&nbsp;
            </div>
            <div className="Branch"> GCS </div>
            <div className="updateUserIcon">
              <Button varient="" onClick={updateUser}>
                <Tooltip title="Update Profile" placement="bottom-end">
                  <img
                    src={update}
                    alt=""
                    style={{ width: "2rem", height: "2rem" }}
                  />
                </Tooltip>
              </Button>
            </div>
          </div>
          <TeamTable />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
