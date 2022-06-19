import React from "react";
import "./Testimonials.css";
import avatar1 from "../../images/me2.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: avatar1,
    name: "Farok Hossain",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolore libero quas dignissimos ratione voluptate, cupiditate aliquam asperiores vero dicta.",
  },
  {
    avatar: avatar1,
    name: "Farok Hossain",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolore libero quas dignissimos ratione voluptate, cupiditate aliquam asperiores vero dicta.",
  },
  {
    avatar: avatar1,
    name: "Farok Hossain",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolore libero quas dignissimos ratione voluptate, cupiditate aliquam asperiores vero dicta.",
  },
  {
    avatar: avatar1,
    name: "Farok Hossain",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolore libero quas dignissimos ratione voluptate, cupiditate aliquam asperiores vero dicta.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
