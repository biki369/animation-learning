
import { useEffect, useRef, useState } from "react";
import './App.css';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";



function App() {
  const [count, setCount] = useState(0);
  const targetDev = useRef(null)

  useGSAP(
    () => {
      // gsap code here...
      gsap.to('.square', { x: 360, duration: 6, ease: 'elastic', delay: 1 });
    },
    // { scope: targetDev }
  );

  // gsap.to( targetDev, { rotate: 360, duration: 6 })

  return (
    <>
      <div >Hello World</div>
      <div className="square" ref={targetDev}></div>
    </>
  )
}

export default App
