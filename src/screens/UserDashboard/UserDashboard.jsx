import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import TeamTable from "../../components/User/Team/TeamTable";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BiSolidInstitution } from "react-icons/bi";
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
              <CiMail /> tashu.kulshresth@gmail.com |&nbsp;
            </div>
            <div className="whatsappNo">
              {" "}
              <CiPhone /> 9881192604 |&nbsp;
            </div>
            <div className="college">
              <BiSolidInstitution /> SLIET |&nbsp;
            </div>
            <div className="Branch"> GCS </div>
          </div>
          <TeamTable />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
