import Layout from "../components/Layout";
//for animation
import { gsap } from "gsap";
import React, { useEffect } from 'react';

const Contact = () => {

  useEffect(() => {
    gsap.fromTo(".sect1 h1  ",
      { autoAlpha: 0, x: -10 },
      {
        duration: 4,
        x: 0,
        autoAlpha: 1,
        ease: "expo.out",
        visibility: "visible",
      }
    );

    gsap.to(".secth1", {duration: 3, text: "this is a to tween"})

    gsap.fromTo(" .contact1, .contact2",
      { autoAlpha: 0, x: -50 },
      {
        duration: 3,
        x: 0,
        delay: 0.7,
        autoAlpha: 1,
        stagger: 0.2,
        ease: "expo.out",
        visibility: "visible",
        scrollTrigger: {
          trigger: ".Aboutme",
          start: "top 75%", // start when top of the element is 75% from the top of the viewport
        },
      }
    );

    gsap.fromTo(" .links",
      { autoAlpha: 0, x: -50 },
      {
        duration: 3,
        x: 0,
        delay: 0.9,
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


  return (
    <div className="App">
      <Layout>
        <header>
          <section className="sect1">
            <article>
              <h1>Hello</h1>
              <div className="contact1" >
                <h2>As long i dont have any intership.</h2>
                <h2>contact me so we can get in touch!</h2>
              </div>
            </article>

            <article>
              <div className="contact2">
                <p>Email: el.j.flier@gmail.com</p>
                <p>School email: 9017738@student.zadkine.nl</p>
                <p>Phone number: 06 23549646</p>
              </div>
              <ul class="links">
                <li>On the internet: </li>
                <li>
                  <a
                    target="_blank"
                    href="mailto:el.j.flier@gmail.com"
                    rel="noreferrer"
                  >
                    Email
                  </a>
                </li>
                <li>/</li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/el-jareauflierstudent/"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>/</li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/El-JareauFlier"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </article>
          </section>
        </header>
      </Layout>
    </div>
  );
};

export default Contact;
