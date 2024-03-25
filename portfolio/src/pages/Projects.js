import Layout from "../components/Layout";
import SkillList from "../components/SkillList";

//for animation
import { gsap } from "gsap";
import React, { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {


  useEffect(() => {
    gsap.fromTo(".skill",
      { autoAlpha: 0, x: -10 },
      {
        duration: 4,
        x: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
        stagger: 0.1,
        delay: 0.5,
      }
    );

    gsap.fromTo(".Aboutme",
      { autoAlpha: 0, x: -200 },
      {
        duration: 4,
        x: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
        scrollTrigger: {
          trigger: ".Aboutme",
          start: "top 75%", // start when top of the element is 75% from the top of the viewport
        },
      }
    );
  }, []);

  function onClick() {
    gsap.to(window, { duration: 1, scrollTo: ".hider" });
  }


  return (
    <div className="App">
      <Layout>
        <header className="project">
          <section className="skillholder">
            <h1>My projects</h1>
            <SkillList />
          </section>
        </header>
      </Layout>
    </div>
  );
};

export default Projects;
