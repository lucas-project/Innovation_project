import Courses from "./Courses";

import reactImg from "../img/styled_components.jpg";
import htmlImg from "../img/html_css.jpg";
import dataImg from "../img/data_visualization.jpg";
import threeImg from "../img/threejs.jpg";
import cssAnimImg from "../img/css_animation.jpg";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const HomeRepertoire = () => {
  const courses = [
    {
      courseImage: reactImg,
      courseTitle: "React Styled Components Course",
      courseAuthor: "John Smilga",
      courseRating: "4.7",
      ratingNumbers: "341",
     
      tag: "Bestseller",
      tagColor: "#ffe799",
    },
    {
      courseImage: htmlImg,
      courseTitle: "10 Mega Responsive Websites with HTML, CSS, and JavaScript",
      courseAuthor: "Code And Create, George Lomidze, Lasha Nozadze",
      courseRating: "4.6",
      ratingNumbers: "255",
     
    },
    {
      courseImage: dataImg,
      courseTitle: "Learn and Understand D3.js for Data Visualization",
      courseAuthor: "Luis Ramirez Jr",
      courseRating: "4.6",
      ratingNumbers: "889",
      
    },
    {
      courseImage: threeImg,
      courseTitle: "Three.js and TypeScript",
      courseAuthor: "Sean Bradley",
      courseRating: "4.4",
      ratingNumbers: "310",
      
      tag: "Most popular",
      tagColor: "#ffe799",
    },
    {
      courseImage: cssAnimImg,
      courseTitle: "Mega CSS Animation Course : 30 Projects Included",
      courseAuthor: "Supriyo Kundu",
      courseRating: "4.6",
      ratingNumbers: "100",
     
    },

    
  ];

  const courses2 = [
    {
      courseImage: dataImg,
      courseTitle: "1",
      courseAuthor: "John Smilga",
      courseRating: "4.7",
      ratingNumbers: "341",
     
      tag: "Highest rating",
      tagColor: "#ffe799",
    },
    {
      courseImage: reactImg,
      courseTitle: "2",
      courseAuthor: "Code And Create, George Lomidze, Lasha Nozadze",
      courseRating: "4.6",
      ratingNumbers: "255",
     
    },
    {
      courseImage: cssAnimImg,
      courseTitle: "3",
      courseAuthor: "Luis Ramirez Jr",
      courseRating: "4.6",
      ratingNumbers: "889",
      
    },
    {
      courseImage: threeImg,
      courseTitle: "4",
      courseAuthor: "Sean Bradley",
      courseRating: "4.4",
      ratingNumbers: "310",
      
      tag: "Most popular",
      tagColor: "#ffe799",
    },
    {
      courseImage: htmlImg,
      courseTitle: "5",
      courseAuthor: "Supriyo Kundu",
      courseRating: "4.6",
      ratingNumbers: "100",
     
    },

    
  ];

const mystyle = {
  color: "#3c3b37",
  fontSize: "1.6rem",
  marginTop: "3rem",
  marginLeft: "16.4%"
};

  
  return (
    
    <>
    
    <h4 style={mystyle}>Top Repertoire</h4>
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
    // <Courses
    //   heading='Top Repertoires '
    //   link='" Recommendation of today"'
      
    //   courses={courses}
    // />
  );
};



export default HomeRepertoire;
