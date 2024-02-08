import Service from "./Service";
import { useState } from "react";

const ServiceList = () => {
  const [services, setServices] = useState([
    {
      title: "Responsive Web Design",
      description:
        "Create websites that work seamlessly on desktops, tablets, and mobile devices.",
    },

    {
      title: "User Interface (UI) Design",
      description:
        "Design visually appealing and intuitive user interfaces for web applications.",
    },

    {
      title: "Front-end Development",
      description:
        "Develop interactive and dynamic user interfaces using modern web technologies.",
    },
  ]);

  return (
    <section className="serviceSect">
      <h2>Services</h2>
      <article className="serviceContainer">
        {services.map((service) => (
          <Service title={service.title} description={service.description} />
        ))}
      </article>
    </section>
  );
};

export default ServiceList;
