import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from "three"
import {  useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing';






export default function Hook() {
    const meashRef = useRef(null);
    // useFrame(({ clock }) => {
        // .current.rotation.x = clock.elapsedTime
        // meashRef.current.rotation.y = clock.elapsedTime
        // meashRef.current.rotation.z = clock.elapsedTime
      // })

      useFrame(({ clock }) => {
        if (meashRef.current) {
          // meashRef.current.rotation.y -= clock.getDelta(); // Rotates smoothly in opposite direction
         meashRef.current.rotation.y = -clock.elapsedTime;


        }
      });
      

      const colorMap = useLoader(TextureLoader, './me.png')
      console.log(colorMap)

  return (
<>
  <ambientLight intensity={1.5} /> {/* Increased intensity */}
  <directionalLight position={[0, 0, 5]} color="white" intensity={2}
     castShadow 
    
  />
  
  {/* Additional point light for glow effect */}
  <pointLight position={[0, 2, 3]} intensity={5} color="white" />
  
  {/* Smooth Orbit Controls */}
  <OrbitControls enableDamping={true} enableZoom={false} dampingFactor={0.1} />
  
  <mesh ref={meashRef} position={[0, 0, 0]} rotation={[-0.1, 1, -0.3]}  
     castShadow 
    receiveShadow >
    
        {/* Higher Segments for Smoothness */}
        <cylinderGeometry args={[2, 2, 4, 64, 60, true]} />

    <meshStandardMaterial map={colorMap} transparent side={THREE.DoubleSide} 
          roughness={0.5} /* Reduces roughness for smooth surface */
          metalness={0.1} /* Adds a glossy effect */
    />
  </mesh>

  {/* Bloom Effect for Glow */}
  {/* <EffectComposer>
    <Bloom intensity={1.1} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
  </EffectComposer> */}
</>

  )
}
