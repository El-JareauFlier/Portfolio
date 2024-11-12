import { useState } from "react";
import Skill from "./Skill";
import SkillDetail from "./skillDetail";
import travelly2 from "../assets/travelly2.png";
import restaurant from "../assets/restaurant.png";
import clothes from "../assets/clothes.png";

const SkillList = () => {
  const [selectedSkillId, setSelectedSkillId] = useState(null);

  const [skills] = useState([

    {
      id: 1,
      title: "Travelly web design",
      work: "team work project",
      description: `Our project focused on creating a user-friendly traveling website tailored for group bookings, specifically designed to provide an immersive tour experience across various cities and countries in Asia. The primary goal was to offer a convenient platform for individuals seeking to explore the rich diversity and cultural wonders of Asia in the company of like-minded travelers.`,
      link: "https://www.figma.com/file/ElZDdh1lxVPkaoFakRmFxV/project?type=design&node-id=0%3A1&mode=design&t=zz0KZ6swpTVBv3qW-1",
      img: travelly2,
    },

    {
      id: 3,
      title: "Restaurant website",
      work: "individual project",
      description: `Welcome to my project. I'm excited to take you on a virtual journey through the flavors and colors of Greece right from your screen. As an MBO 4 student, I've poured my heart and soul into creating this website to showcase the beauty and deliciousness of Greek cuisine.\n
      Imagine strolling through the cobblestone streets of Athens, feeling the warmth of the Mediterranean sun on your skin, and indulging in mouthwatering dishes that burst with flavor. That's the experience I want to bring to you through "Taste of Greece".\n
      With vibrant colors like blue, white, and orange, inspired by the Greek flag and its stunning landscapes, I've designed this website to be as inviting as a Greek taverna on a summer evening.\n
      So, whether you're here to learn about Greek food, plan your next culinary adventure, or simply satisfy your cravings for souvlaki and baklava, I've got you covered. Get ready to dive into the world of Greek cuisine it's going to be a delicious ride!`,
      link: "github",
      img: restaurant,
    },

    {
      id: 0,
      title: "The street store",
      work: "team work project",
      description: `We teamed up to create an online clothing store for a project. My part was to design the first page you see when you visit the site, and also the section where we showcase different types of pants.\n
    For the homepage, I made sure it looked nice and was easy to use. I put buttons where you can click to find what you're looking for, and I made sure the pictures of the clothes were big and clear.\n
    In the pants section, I arranged everything so it's easy to look through. You can use filters to find pants in your size or favorite color. I also wrote short descriptions about each pair of pants to help people decide which ones they like.\n
    We worked together by talking often and sharing ideas. This helped us make sure everything looked good and worked well on the website.\n
    Overall, we created a cool online store that our teacher really liked.`,
      link: "github",
      img: clothes,
    },
  ]);

  const toggleSkillDetail = (id) => {
    if (selectedSkillId === id) {
      setSelectedSkillId(null); // Verberg detail als het al getoond wordt
    } else {
      setSelectedSkillId(id); // Toon detail voor de geklikte skill
    }
  };

  return (
    <div className="container">
      {skills.map((skill) => (
        <div className="skilldetail">
          <Skill
            onClick={() => toggleSkillDetail(skill.id)}
            title={skill.title}
            img={skill.img}
          />
          <div className="skillhider">
            {selectedSkillId === skill.id && (
              <SkillDetail
                work={skill.work}
                description={skill.description}
                link={skill.link}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
