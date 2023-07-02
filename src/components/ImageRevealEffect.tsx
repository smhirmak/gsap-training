import React, { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

const ImageRevealEffect = () => {
  let container: any = useRef(null);
  let image: any = useRef(null);
  // var imageReveal = CSSRulePlugin.getRule('.img-container:after');

  const tl = gsap.timeline();

  useEffect(() => {
    const GSAP = require('gsap/CSSRulePlugin');
    const { CSSRulePlugin } = GSAP;
    gsap.registerPlugin(CSSRulePlugin); //Bu kısım nextjs ile kullanırken cssruleplugin ögesi window a erişmek istediğinden dolayı hata veriyor bu dahil 3 satır ÇÖZÜM
    // do whatever you want to do with the plugin, its Working now...
    // for example
    let imageReveal = CSSRulePlugin.getRule('.img-container:after');
    tl.to(container, 0, { css: { visibility: 'visible' } })
      .to(imageReveal, 1.4, {
        width: '0%',
        ease: Power2.easeInOut
      })
      .from(image, 1.4, { scale: 1.7, ease: Power2.easeInOut, delay: -1.5 });
  }, []);
  return (
    <section className="main">
      <div className="container" ref={(el) => (container = el)}>
        <>
          <div className="img-container">
            <img ref={(el) => (image = el)} src="macu.webp" alt="" />
          </div>
        </>
      </div>
    </section>
  );
};

export default ImageRevealEffect;
