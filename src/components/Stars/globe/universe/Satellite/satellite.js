import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";


const Satellite = ({onClick}) => {
  const satellite = useRef();
  const [radius] = useState(2);
  // const [speed] = useState(0.01); 

  const inclination = Math.PI / 5;

  const satelliteTexture = useLoader(TextureLoader, "/satellite.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    satellite.current.position.x = radius * Math.sin(t/2);
    satellite.current.position.y = radius * Math.sin(t/2) * Math.sin(inclination);
    satellite.current.position.z = radius * Math.cos(t/2) * 1.7;

    // satellite.current.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={satellite} position={[radius, 0, 0]} onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}>
      <planeGeometry args={[1, 1, 2]} />
      <meshStandardMaterial color="white" map={satelliteTexture} transparent={true}  side={THREE.DoubleSide}/>
    </mesh>
  );
};

export default Satellite;
