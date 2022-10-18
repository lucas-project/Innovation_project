import HomeListComposer from "./home-list-composer";

import ethicalImg from "../img/ethical_hack.jpg";
import cdataImg from "../img/cdata.jpg";
import kuberImg from "../img/kubernetes.jpg";
import financialImg from "../img/financial.jpg";
import graphicImg from "../img/graphic.jpg";

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
const HomeInstrument = () => {
  const courses = [
    {
      courseImage: ethicalImg,
      courseTitle: "Learn Ethical Hacking From Scratch",
      courseAuthor: "Zaid Sabih, z Security",
      courseRating: "4.6",
      ratingNumbers: "94,117",
      
    },
    {
      courseImage: cdataImg,
      courseTitle: "Mastering Data Structures & Algorithms using C and C++",
      courseAuthor: "Abdul Bari",
      courseRating: "4.7",
      ratingNumbers: "17,135",
      
    },
    {
      courseImage: financialImg,
      courseTitle:
        "The Data Science Course 2021: Complete Data Science Bootcamp",
      courseAuthor: "365 Careers, 365 Careers Team",
      courseRating: "4.6",
      ratingNumbers: "90,944",
      
    },
    {
      courseImage: kuberImg,
      courseTitle:
        "Certified Kubernetes Administrator (CKA) with Practice Tests",
      courseAuthor: "Mumshad Mannambeth, KodeKloud Training",
      courseRating: "4.7",
      ratingNumbers: "24,590",
     
    },
    {
      courseImage: graphicImg,
      courseTitle: "Graphic Design Masterclass - Learn GREAT Design",
      courseAuthor: "Lindsay Marsh",
      courseRating: "4.7",
      ratingNumbers: "25,588",
     
    },
  ];

  const courses2 = [
    {
      courseImage: financialImg,
      courseTitle: "Learn Ethical Hacking From Scratch",
      courseAuthor: "Zaid Sabih, z Security",
      courseRating: "4.6",
      ratingNumbers: "94,117",

    },
    {
      courseImage: graphicImg,
      courseTitle: "Mastering Data Structures & Algorithms using C and C++",
      courseAuthor: "Abdul Bari",
      courseRating: "4.7",
      ratingNumbers: "17,135",

    },
    {
      courseImage: ethicalImg,
      courseTitle:
          "The Data Science Course 2021: Complete Data Science Bootcamp",
      courseAuthor: "365 Careers, 365 Careers Team",
      courseRating: "4.6",
      ratingNumbers: "90,944",

    },
    {
      courseImage: kuberImg,
      courseTitle:
          "Certified Kubernetes Administrator (CKA) with Practice Tests",
      courseAuthor: "Mumshad Mannambeth, KodeKloud Training",
      courseRating: "4.7",
      ratingNumbers: "24,590",

    },
    {
      courseImage: cdataImg,
      courseTitle: "Graphic Design Masterclass - Learn GREAT Design",
      courseAuthor: "Lindsay Marsh",
      courseRating: "4.7",
      ratingNumbers: "25,588",

    },
  ];
  return (
  <>

    <h4 style={mystyle}>View by Instruments</h4>
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
      <SwiperSlide><HomeListComposer courses={courses}/></SwiperSlide>
      <SwiperSlide><HomeListComposer courses={courses2}/></SwiperSlide>
    </Swiper>
  </>
  );
};

export default HomeInstrument;
