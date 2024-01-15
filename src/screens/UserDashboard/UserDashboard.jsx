import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import MsgCloud from "../../components/User/UserDashBoard/msgCloud";
import UserForm from "../../components/User/UserDashBoard/Form/form"; 

const SciFiPortway = () => {
  const glb = useGLTF("/astronaut.glb");

  return (
    <>
      <mesh>
        <primitive object={glb.scene} position={[0,-0.5,1]} scale={0.2} />;
        {/* <MsgCloud position={[1, 2, 3]} /> */}
      </mesh>
    </>
  );
};

const UserDashboard = () => {
  return (
    <>
    <header className="animated-title" style={{width:"100%", height:"10%", display:"flex", color:"white", justifyContent:"center", alignItems:"center", fontSize:"2.5rem"}}>User Dashboard</header>
      <div className="userDashboard" style={{ display: "flex" }}>
        <div className="robotModel" style={{display:"flex", justifyContent:"center", alignItems:"center", height: "90vh", width: "50vw" }}>
          <Canvas camera={{ position: [-1.3 , 1, 2] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 6, 0]} intensity={0} />
            <Suspense fallback={null}>
              <SciFiPortway />
            </Suspense>
            <OrbitControls
            // maxDistance={5}
            // minPolarAngle={Math.PI / 4}
            // enableZoom={false}
            // enablePan={false}
            // enableRotate={false}
            />
          </Canvas>
        </div>
        <div className="userForm" style={{ height: "90vh", width: "50vw" }}>
          <TypeAnimation
            sequence={[
              "Exploring New Horizons",
              1000,
              "Together in the Universe of Innovation",
              1000,
            ]}
            // wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position:"relative",
              top:"10%",  
              color: "white",
            }}
            repeat={Infinity}
          />
          <UserForm />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
