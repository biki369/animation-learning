import React, { Suspense, useState } from 'react'

import { Canvas } from "@react-three/fiber"
import Loader from '../components/Loader'
import { Island } from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plan from '../models/Plan'


const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustingIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 769) {
      screenScale = [0.9, 0.9, 0.9];
      // screenPosition = [0,-6.5,-43.4];
    } else {
      screenScale = [1, 1, 1];
      // screenPosition = [0,-6.5,-43.3];
    }
    // return [screenScale, screenPosition, rotation];
    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition] = adjustingIslandForScreenSize();

  const adjustingPlanScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 769) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, 0];
    }
    return [screenScale, screenPosition];
  }

  const [planScale, PlanPosition] = adjustingPlanScreenSize();




  return (
    <section className="w-full h-screen relative" >

      {/*
        <div className=" absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
         POPUP
        </div>        
      */}
      <Canvas 
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight
            skyColor="#b1e1ff" groundColor="#000000"
            intensity={1}
          />
          <Sky />
          <Bird />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plan
            planScale={planScale}
            PlanPosition={PlanPosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />

        </Suspense>


      </Canvas>



    </section>
  )
}

export default Home
