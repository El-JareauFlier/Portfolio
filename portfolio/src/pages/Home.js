import Layout from "../components/Layout";
import ServiceList from "../components/ServiceList";
import me from "../assets/me.png";
import { gsap } from "gsap";

// function animate() {

//   var main_tl               = new TimelineMax();

//    main_tl

//   .add(animElementsTl())

// ;

// }

// function animElementsTl() {

//   var elementsTl = new TimelineMax();

//       elementsTl

//INFO PAGE

// ;

//   return elementsTl;

// }

// document.addEventListener("DOMContentLoaded", function() {

//           animate();

// });

const Home = () => {
  useGSAP(
    () => {
      gsap.from(".profileText", {
        duration: 2,
        x: -50,
        autoAlpha: 0,
        ease: "expo.out",
        visibility: "visible",
      }); // <-- automatically reverted
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div className="App">
      <Layout>
        <header>
          <section className="profile">
            <article className="profileText">
              <div>
                <h1>El-jareau</h1>
                <h2>Flier</h2>
              </div>
              <p>- Student at Techniek college schiedam -</p>
            </article>

            <div className="profileImg">
              <img src={me} alt="me" />
            </div>

            <div className="profileText2">
              <h2>- Front-end developer -</h2>

              <a href="./images/cv.pdf" download>
                <button>My cv</button>
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

              <h2>My skills: </h2>
              <p className="small">
                HTML, CSS, Javascript, React, Bootstrap & Figma
              </p>
            </div>
          </section>

          <ServiceList />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
