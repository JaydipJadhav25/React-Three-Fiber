import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'


export default function Hook() {
    const meashRef = useRef(null);

    // useFrame(() => {
    //     console.log("Hey, I'm executing every frame!")
    //   })


    useFrame(({ clock }) => {
        // .current.rotation.x = clock.elapsedTime
        meashRef.current.rotation.y = clock.elapsedTime
      })

  return (
    <>
            <mesh ref={meashRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
              <boxGeometry args={[3 ,4 ,3]} />
              <meshBasicMaterial color="royalblue"   wireframe />
            </mesh>
            {/* <mesh ref={meashRef} position={[-2, 0, 0]} rotation={[0, 0, 0]}>
              <boxGeometry args={[3 ,4 ,3]} />
              <meshBasicMaterial color="royalblue"   wireframe />
            </mesh> */}
    </>
  )
}
