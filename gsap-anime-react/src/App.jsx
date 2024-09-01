
import { useEffect, useRef, useState } from "react";
import './App.css';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";



function App() {
  // const [count, setCount] = useState(0);
  const targetDev = useRef(null)

  // useGSAP(
  //   () => {
  //     // gsap code here...
  //     // gsap.to('.overlay', { x: 360, duration: 6, ease: 'elastic', delay: 1 });
  //     gsap.to('.overlay', { x: 360, duration: 6, ease: 'elastic', delay: 1 });
  //   },
  //   // { scope: targetDev }
  // );

  // gsap.to( targetDev, { rotate: 360, duration: 6 })
  // useEffect(() => {
  //   const element = targetDev.current;

  //   gsap.fromTo(element,
  //     {
  //       width: 100,
  //       opacity: 1,
  //     },
  //     {
  //       opacity: 0,
  //       width: 0, 
  //       duration: 1.5, ease: 'power4.inOut'
  //     }
  //   );

  //   return () => {
  //     gsap.to('.overlay', {
  //       width: 0,
  //       opacity: 1,

  //       duration: 1.5, ease: 'power4.inOut'
  //     });
  //   };
  // }, []);

  //also try this

  useGSAP(
    () => {
      gsap.to('.overlay', {
        width: 0,
        opacity: 1,

        duration: 1.5, ease: 'power4.inOut'
      });
    },
    // { scope: targetDev }
  );



  return (
    < div className="app">
      <div className="overlay" ref={targetDev} ></div>
      <div >Hello World</div>
      <div className="square" ref={targetDev}></div>
    </div>
  )
}

export default App
