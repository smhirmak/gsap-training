import { gsap, Power3 } from 'gsap';
import React, { useState, useEffect, useRef } from 'react';

const ThreeCircle = () => {
  let circle: any = useRef(null);
  let circleRed: any = useRef(null);
  let circleBlue: any = useRef(null);

  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    // gsap.from(circle, 0.8, { opacity: 0, x: 50, ease: Power3.easeOut });
    // gsap.from(circleRed, 0.8, { opacity: 0, x: 50, ease: Power3.easeOut, delay: 0.2 });
    // gsap.from(circleBlue, 0.8, { opacity: 0, x: 50, ease: Power3.easeOut, delay: 0.4 });
    gsap.from([circle, circleRed, circleBlue], 0.8, {
      x: 50,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.2,
      stagger: { from: 'start', amount: 0.2 }
    });
  }, []);

  const handleExpand = () => {
    gsap.to(circleRed, 0.8, { width: 200, height: 200, ease: Power3.easeOut });
    setState(true);
  };

  const handleShrink = () => {
    gsap.to(circleRed, 0.8, { width: 75, height: 75, ease: Power3.easeOut });
    setState(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="circle-container">
          <div ref={(el) => (circle = el)} className="circle"></div>
          <div
            ref={(el) => (circleRed = el)}
            onClick={!state ? handleExpand : handleShrink}
            className="circle red"></div>
          <div ref={(el) => (circleBlue = el)} className="circle blue"></div>
        </div>
      </header>
    </div>
  );
};

export default ThreeCircle;
