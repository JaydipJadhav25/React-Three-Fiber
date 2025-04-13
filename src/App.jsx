import React  , {useEffect}from 'react'
import { Canvas } from '@react-three/fiber'
import Hook from './Hook'
// import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { EffectComposer, Bloom } from '@react-three/postprocessing';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration
      easing: "ease-in-out", // smooth transition

    });
  }, []);



  return (
   <>

    {/* <div className="h-screen w-full bg-[url('https://t4.ftcdn.net/jpg/01/67/23/55/360_F_167235520_AFrB955JhCwhkpz1ev2L7X9SBcpVgAyg.jpg')] bg-cover bg-center"> */}
    <div className="h-screen w-full bg-black">


    {/* <div className="absolute top-[5%] mt-8 text-center w-full overflow-hidden">
      <h1 className="text-6xl font-extrabold uppercase animate-pulse bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-2xl">my projects</h1>
      </div> */}

      <Canvas shadows>
  <Hook/>
      </Canvas>

      <div className="absolute top-[80%] mt-8 text-center w-full overflow-hidden">
 
     <h1 
  data-aos="fade-down" 
  data-aos-duration="2000"
  className="text-6xl font-extrabold uppercase text-yellow-400 whitespace-nowrap"
>
  I am Jaydip,
</h1>


        <h1 
  data-aos="fade-up" 
  data-aos-duration="5000"
  data-aos-delay="1000"
  className="text-6xl font-extrabold uppercase text-white whitespace-nowrap"
>
  A passionate <span className="text-yellow-400 drop-shadow-lg">Full Stack Developer</span> specializing in  
  <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> MERN</span>
</h1>



     

    </div>

      
    </div>

  
   </>
  )
}

export default App