import React from 'react'
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

const MsgCloud = ({ position }) => {
    const imageTexture = useLoader(TextureLoader, "/msgCloud.png");
    return (
      <mesh position={position}>
        <planeGeometry attach="geometry" args={[1, 1]} />
        <meshBasicMaterial attach="material" map={imageTexture} />
      </mesh>
    );
  };

  export default MsgCloud;