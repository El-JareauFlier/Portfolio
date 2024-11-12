import Layout from "../components/Layout";
import ServiceList from "../components/ServiceList";
import me from "../assets/me.png";

//for animation
import { gsap } from "gsap";
import React, { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    gsap.fromTo(".motionLeft, .profileText p",
      { autoAlpha: 0, x: -100 },
      {
        duration: 4,
        x: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
        stagger: 0.3,
        delay: 0.5,

      }
    );

    gsap.fromTo(".profileImg, .profileText2",
      { autoAlpha: 0, y: -100 },
      {
        duration: 4,
        y: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
        stagger: 0.2,
      }
    );

    gsap.fromTo(".Aboutme",
      { autoAlpha: 0, x: -80 },
      {
        duration: 3,
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

    gsap.fromTo(".AboutmeText",
      { autoAlpha: 0, y: -50 },
      {
        duration: 4,
        y: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
        delay: 0.4,
        stagger: 1,
        scrollTrigger: {
          trigger: ".AboutmeText",
          start: "top 75%", // start when top of the element is 75% from the top of the viewport
        },
      }
    );
    
    gsap.fromTo(".animate-skills",
      { autoAlpha: 0, y: 50 },
      {
        duration: 4,
        y: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
        delay: 0.1, // Adjust the delay as needed
        scrollTrigger: {
          trigger: ".AboutmeText",
          start: "top 75%", // start when top of the element is 75% from the top of the viewport
        },
      }
    );

  }, []);

  return (
    <div className="App">
      <Layout>
        <header>
          <section className="profile">
            <article className="profileText">
              <div className="motionLeft">
                <h1>El-jareau</h1>
                <h2>Flier</h2>
              </div>
              <p>- Student at Techniek college schiedam -</p>
            </article>

            <div className="profileImg">
              <img src={me} alt="me" />
            </div>

            <div className="profileText2">
              <h2>- Creative Developer -</h2>

              <a href="./images/cv.pdf" download>
                <button>MY CV</button>
              </a>
            </div>
          </section>
        </header>
        <main>
          <section className="main1">
            <div className="Aboutme">
              <h2 className="about">About</h2>
              <h2>me</h2>
            </div>
            <div className="AboutmeText">
              <p>
                Hi, my name is El-Jareau Flier and im an MBO 4 Front-End
                Development student at Techniek College Rotterdam. <br />
                <br /> I am currently in my second year and i am looking for an
                internship for the period of 10 weeks. i studied at Experience
                college and have a diploma in Media Design & ICT. I am a hard
                worker and i am always looking for a challenge.
              </p>

              <div className="animate-skills">
                <h2>My skills: </h2>
                <p className="small">
                  HTML, CSS, Javascript, React, Bootstrap & Figma
                </p>
              </div>
            </div>
          </section>

          <ServiceList />
        </main>

        <footer>
          <section className="footer">
            <p>© 2024 El-Jareau Flier. All rights reserved.</p>
          </section>
        </footer>
      </Layout>
    </div>
  );
};

export default Home;
