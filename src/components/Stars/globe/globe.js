import React, { useRef, useMemo, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { TextureLoader, SpriteMaterial, Sprite, Group } from "three";

function Globe({ position, location }) {
  const latLongToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    let x = -(radius * Math.sin(phi) * Math.cos(theta));
    let z = radius * Math.sin(phi) * Math.sin(theta);
    let y = radius * Math.cos(phi);
    return [x, y, z];
  };

  const meshRef = useRef();
  const globeTexture = useLoader(TextureLoader, "/atlas.jpeg");
  const locationTexture = useLoader(TextureLoader, "/location.png");
  const logoTexture = useLoader(TextureLoader, "/logo.png");

  const { radius } = useThree().camera;
  const locationPosition = useMemo(
    () => latLongToVector3(location.lat, location.lon),
    [location, radius]
  );

  const spriteMaterial = new SpriteMaterial({ map: locationTexture });
  const sprite = new Sprite(spriteMaterial);
  sprite.position.set(...locationPosition);
  sprite.scale.set(0.5, 0.5, 0.5);

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <group>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshStandardMaterial
          color="#25c6e5"
          map={globeTexture}
          object={sprite}
        />
        <primitive object={sprite} />
      </mesh>
      <mesh>
        <planeGeometry attach="geometry" args={[1,1]}/>
        <meshStandardMaterial attach="material" map={logoTexture}/>
      </mesh>
    </group>
  );
}

export default Globe;
