import React from 'react';
import './About.css';
import ME from '../../images/me2.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {FiFolderPlus} from 'react-icons/fi';

const About = () => {
  return (
      <section id="about">
          <h5>Get To Know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
              <div className="about__me">
                  <div className="about__me-image">
                      <img src={ME} alt="About Image" />
                  </div>
              </div>

              <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"></FaAward>
                        <h5>Experience</h5>
                        <small>1+ Years Working</small>
                    </article>

                    <article className="about__card">
                        <FiUsers className="about__icon"></FiUsers>
                        <h5>Clients</h5>
                        <small>100+ Worldwide</small>
                    </article>

                    <article className="about__card">
                        <FiFolderPlus className="about__icon"></FiFolderPlus>
                        <h5>Projects</h5>
                        <small>10+ Completed</small>
                    </article>
                </div>

                <p>
                        Dynamic and detail-oriented Web Developer with a skill for user-friendly, solutions effectively. Experience
                        with an e-commerce web app, a CRM online portal, and a fully-functional website for going beyond web
                        technology. I have an extensive understanding of end-to-end Front-end and Backend technology. I also
                        try to be regular participants of local hackathons and web developer meetups.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
              </div>
          </div>
      </section>
  )
}

export default About