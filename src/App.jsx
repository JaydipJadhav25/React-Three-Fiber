import React from 'react'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
   <>

    <div className="h-screen w-full bg-[url('https://t4.ftcdn.net/jpg/01/67/23/55/360_F_167235520_AFrB955JhCwhkpz1ev2L7X9SBcpVgAyg.jpg')] bg-cover bg-center">
      <Canvas>
        <mesh>
          <boxGeometry args={[3 ,3 ,3]} />
          <meshBasicMaterial color="red"  />
        </mesh>
      </Canvas>

      
    </div>

  
   </>
  )
}

export default App