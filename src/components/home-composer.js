import Courses from "./Courses";

import djangoEcomImg from "../img/django_ecommerce.jpg";
import djangoFullImg from "../img/django_fullstack.jpg";
import pythonImg from "../img/python_django.jpg";
import buildPyImg from "../img/build_python.jpg";
import reactDjImg from "../img/react_django.jpg";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
const mystyle = {
  color: "#3c3b37",
  fontSize: "1.6rem",
  marginTop: "3rem",
  marginLeft: "16.4%"
};

const HomeComposer = () => {
  const courses = [
    {
      courseImage: djangoEcomImg,
      courseTitle: "Kate Dcott | Build Advanced Django Web Application",
      courseAuthor: "Victoria, Australia",
      courseRating: "4.8",
      ratingNumbers: "57",
      
    },
    {
      courseImage: djangoFullImg,
      courseTitle: "Helen Whitaker | Full Stack Websites with Python Web Development",
      courseAuthor: "Nick Walter",
      courseRating: "4.7",
      ratingNumbers: "3,091",
      
    },
    {
      courseImage: pythonImg,
      courseTitle: "Tessa Sanderson | Python Django Dev To Deployment",
      courseAuthor: "Brad Traversy",
      courseRating: "4.6",
      ratingNumbers: "4,532",
      
      tag: "Most polular",
      tagColor: "#ffe799",
    },
    {
      courseImage: buildPyImg,
      courseTitle: "Dina Peters | Build Python Django Real Project: Django Web Development",
      courseAuthor: "Rathan Kumar",
      courseRating: "4.5",
      ratingNumbers: "168",
      
    },
    {
      courseImage: reactDjImg,
      courseTitle:
        "Mary Muir | React & Django Full Stack: web app, backend API, mobile apps",
      courseAuthor: "Krystian Czekalski",
      courseRating: "4.3",
      ratingNumbers: "1,172",
    
    },
  ];

  const courses2 = [
    {
      courseImage: buildPyImg,
      courseTitle: "Kate Dcott | Build Advanced Django Web Application",
      courseAuthor: "Victoria, Australia",
      courseRating: "4.8",
      ratingNumbers: "57",

    },
    {
      courseImage: reactDjImg,
      courseTitle: "Helen Whitaker | Full Stack Websites with Python Web Development",
      courseAuthor: "Nick Walter",
      courseRating: "4.7",
      ratingNumbers: "3,091",

    },
    {
      courseImage: pythonImg,
      courseTitle: "Tessa Sanderson | Python Django Dev To Deployment",
      courseAuthor: "Brad Traversy",
      courseRating: "4.6",
      ratingNumbers: "4,532",

      tag: "Most polular",
      tagColor: "#ffe799",
    },
    {
      courseImage: djangoEcomImg,
      courseTitle: "Dina Peters | Build Python Django Real Project: Django Web Development",
      courseAuthor: "Rathan Kumar",
      courseRating: "4.5",
      ratingNumbers: "168",

    },
    {
      courseImage: djangoFullImg,
      courseTitle:
          "Mary Muir | React & Django Full Stack: web app, backend API, mobile apps",
      courseAuthor: "Krystian Czekalski",
      courseRating: "4.3",
      ratingNumbers: "1,172",

    },
  ];
  return (
      <>

        <h4 style={mystyle}>Popular Composers</h4>
        <Swiper

            slidesPerView={1}
            spaceBetween={33}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
          <SwiperSlide><Courses courses={courses}/></SwiperSlide>
          <SwiperSlide><Courses courses={courses2}/></SwiperSlide>
        </Swiper>
      </>
  );
};

export default HomeComposer;
