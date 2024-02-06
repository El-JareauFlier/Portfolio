import { useState } from "react";
import Skill from "./Skill";
import SkillDetail from "./skillDetail";
import travelly from "../assets/travelly.png";

const SkillList = () => {
  const [selectedSkillId, setSelectedSkillId] = useState(null);

  const [skills] = useState([
    {
      id: 0,
      title: "name project",
      work: "team work",
      description:
        "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      link: "github",
      img: "not yet",
    },

    {
      id: 1,
      title: "Travelly web design",
      work: "team work",
      description:
        "Our project focused on creating a user-friendly traveling website tailored for group bookings, specifically designed to provide an immersive tour experience across various cities and countries in Asia. The primary goal was to offer a convenient platform for individuals seeking to explore the rich diversity and cultural wonders of Asia in the company of like-minded travelers.",
      link: "https://www.figma.com/file/ElZDdh1lxVPkaoFakRmFxV/project?type=design&node-id=0%3A1&mode=design&t=zz0KZ6swpTVBv3qW-1",
      img: travelly,
    },

    {
      id: 3,
      title: "name projects",
      work: "individual",
      description:
        "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      link: "github",
      img: "not yet",
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
    <section className="container">
      {skills.map((skill) => (
        <>
          <Skill
            onClick={() => toggleSkillDetail(skill.id)}
            title={skill.title}
            img={skill.img}
          />
          {selectedSkillId === skill.id && (
            <SkillDetail
              work={skill.work}
              description={skill.description}
              link={skill.link}
            />
          )}
        </>
      ))}
    </section>
  );
};

export default SkillList;
