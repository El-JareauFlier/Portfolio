import Layout from "../components/Layout";
import SkillList from "../components/SkillList";

//for animation
import { gsap } from "gsap";
import React, { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {


  useEffect(() => {
    gsap.fromTo(".skillholder h1",
      { autoAlpha: 0, y: -30 },
      {
        duration: 3,
        y: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
        delay: 0.3,
      }
    );
    gsap.fromTo(".skill",
      { autoAlpha: 0, x: -20 },
      {
        duration: 4,
        x: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
        stagger: 0.1,
        delay: 0.6,
      }
    );
  }, []);

  return (
    <div className="App">
      <Layout>
        <header className="project">
          <section className="skillholder">
            <h1>My projects</h1>
            <SkillList />
          </section>
        </header>
        <footer>
          <section className="footer">
            <p>© 2024 El-Jareau Flier. All rights reserved.</p>
          </section>
        </footer>
      </Layout>
    </div>
  );
};

export default Projects;
