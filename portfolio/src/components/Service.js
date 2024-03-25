//for animation
import { gsap } from "gsap";
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Service = ({ title, description }) => {

  //animation
  useEffect(() => {
    gsap.fromTo(".serviceCard",
      { autoAlpha: 0, x: -10, y: -40 },
      {
        duration: 4,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".serviceCard",
          start: "top 75%", // start when top of the element is 75% from the top of the viewport
        },
      }
    );
  }, []);


  return (
    <div className="serviceCard">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Service;
