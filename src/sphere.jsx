import React, {useRef} from 'react'
import { useLoader, useFrame } from '@react-three/fiber';
import {TextureLoader} from "three";

function Sphere({ position }) {
    const meshRef = useRef();
    const texture = useLoader(TextureLoader, "/atlas.jpeg");
  
    useFrame(() => {
     meshRef.current.rotation.y += 0.01;
    });
    return (
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#00308F" map={texture}/>
      </mesh>
    );
  }

export default Sphere;