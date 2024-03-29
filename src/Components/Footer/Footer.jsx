import React from "react";
import "./Footer.css";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        AFS
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <GrFacebook></GrFacebook>
        </a>
        <a href="https://instagram.com">
          <BsInstagram></BsInstagram>
        </a>
        <a href="https://twitter.com" target="_blank">
          <BsTwitter></BsTwitter>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AFS Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
