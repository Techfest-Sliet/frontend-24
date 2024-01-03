import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { SphereBufferGeometryProps } from "@react-three/fiber";
import * as THREE from "three";

function Star() {
  const Star = useRef();
  const [position, scale] = useMemo(() => {
    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 2000
    );

    const scale = Math.random() * 5;
    return [pos, scale];
  }, []);


  useFrame(() => {
    Star.current.rotation.x += 0.0005;
    Star.current.rotation.y += 0.0005;
  })


  return (
    <mesh ref={Star} position={position}>
      <sphereGeometry attach="geometry" args={[0.5, 24, 24]} />
      <meshStandardMaterial attach="material" color="white" />
      <meshBasicMaterial color="white" />
    </mesh>
  )
}

export default Star;
