import React  , {useEffect}from 'react'
import { Canvas } from '@react-three/fiber'
import Hook from './Hook'
// import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration
      easing: "ease-in-out", // smooth transition

    });
  }, []);



  return (
   <>

    <div className="h-screen w-full bg-[url('https://t4.ftcdn.net/jpg/01/67/23/55/360_F_167235520_AFrB955JhCwhkpz1ev2L7X9SBcpVgAyg.jpg')] bg-cover bg-center">
      <Canvas>
  <Hook/>
      </Canvas>

      <div className="absolute top-[80%] mt-8 text-center w-full overflow-hidden">
      {/* <motion.div
      className="flex w-max"
      initial={{ x: "100vw" }}
      animate={{ x: "-100vw" }}
      transition={{
        duration: 8,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <h1 className="text-8xl font-extrabold uppercase text-white">
        Jaydip is a passionate Full Stack Developer specializing in MERN and DevSecOps,
      </h1>
      <h1 className="text-8xl font-extrabold uppercase text-white">
         with expertise in React, Next.js, and cloud technologies
      </h1>
  
    </motion.div> */}
         <h1 
             data-aos="fade-down" 
             data-aos-duration="2000" // Optional: set duration for animation
         className="text-6xl font-extrabold uppercase text-white whitespace-nowrap">
          I am Jaydip,
        </h1>

        <h1 
             data-aos="fade-up" 
             data-aos-duration="5000" // Optional: set duration for animation
             data-aos-delay="1000" 
         className="text-6xl font-extrabold uppercase text-white whitespace-nowrap">
          a passionate Full Stack Developer specializing in MERN
        </h1>

    </div>
      
    </div>

  
   </>
  )
}

export default App