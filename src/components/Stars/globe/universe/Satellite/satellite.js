import { useRef, usesatellite, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Set initial camera position
  camera.position.set(0, 3, 5);

  return <OrbitControls args={[camera, domElement]} />;
};


const Satellite = () => {
  const satellite = useRef();
  const [radius] = useState(2); // Orbit radius
  const [speed] = useState(0.01); // Orbit speed
  const inclination = Math.PI / 5;

  const satelliteTexture = useLoader(TextureLoader, "/satellite.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    satellite.current.position.x = radius * Math.sin(t);
    satellite.current.position.y = radius * Math.sin(t) * Math.sin(inclination);
    satellite.current.position.z = radius * Math.cos(t) * 1.7;

    // satellite.current.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={satellite} position={[radius, 0, 0]} >
      <planeGeometry args={[1, 1, 2]} />
      <meshStandardMaterial color="white" map={satelliteTexture} transparent={true}  side={THREE.DoubleSide}/>
    </mesh>
  );
};

export default Satellite;
