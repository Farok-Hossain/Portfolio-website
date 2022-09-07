import React from "react";
import "./Portfolio.css";
import IMG1 from "../../images/me.png";
import doctor from "../../images/doctor.PNG";

const data = [
  {
    id: 1,
    image: doctor,
    title: "Privacy Firewall App",
    server: "https://github.com/Farok-Hossain/doctors-portal-server",
    client: "https://github.com/Farok-Hossain/doctors-portal-client",
    demo: "https://doctors-portal-ec125.firebaseapp.com",
  },
  {
    id: 2,
    image: doctor,
    title: "Privacy Firewall App",
    server: "https://github.com/Farok-Hossain/doctors-portal-server",
    client: "https://github.com/Farok-Hossain/doctors-portal-client",
    demo: "https://doctors-portal-ec125.firebaseapp.com",
  },
  {
    id: 3,
    image: doctor,
    title: "Privacy Firewall App",
    server: "https://github.com/Farok-Hossain/doctors-portal-server",
    client: "https://github.com/Farok-Hossain/doctors-portal-client",
    demo: "https://doctors-portal-ec125.firebaseapp.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, server, client, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={server} className="btn" target="_blank">
                  Server Github Code
                </a>
                <a href={client} className="btn" target="_blank">
                  Client Github Code
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Website
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
