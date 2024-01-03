import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { ScrollControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import Sphere from "./sphere";
import LandingPage from "./screens/landingPage/landingPage";

function App() {
  return (
    <>
      <div className="app">
        <LandingPage />
      </div>
    </>
  );
}

export default App;
