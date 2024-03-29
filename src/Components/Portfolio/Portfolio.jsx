import React from "react";
import "./Portfolio.css";
import IMG1 from "../../images/me.png";
import doctor from "../../images/doctor.PNG";

const data = [
  {
    id: 1,
    image: doctor,
    server: "https://github.com/Farok-Hossain/doctors-portal-server",
    client: "https://github.com/Farok-Hossain/doctors-portal-client",
    demo: "https://doctors-portal-ec125.firebaseapp.com",
  },
  {
    id: 2,
    image: doctor,
    server: "https://github.com/Farok-Hossain/doctors-portal-server",
    client: "https://github.com/Farok-Hossain/doctors-portal-client",
    demo: "https://doctors-portal-ec125.firebaseapp.com",
  },
  {
    id: 3,
    image: doctor,
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

      <div style={{ width: 900 }} className="container portfolio__container">
        {data.map(({ id, image, server, client, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img style={{ width: 400 }} src={image} />
              </div>
              <br />
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
