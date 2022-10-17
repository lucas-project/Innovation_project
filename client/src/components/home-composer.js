import HomeListItem from "./home-list-item";

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
      "_id": "633cc39a56e324f2dac4f6a8",
      "name": "Beglarian Eve",
      "nationality": "American Armenian",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1958"
    },
    {
      "_id": "633cc39a56e324f2dac4f6ab",
      "name": "Blass Noa",
      "nationality": "Israeli",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1937-2008"
    },
    {
      "_id": "633cc39a56e324f2dac4f6ae",
      "name": "Bonis Mel",
      "nationality": "French",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1858-1937"
    },
    {
      "_id": "633cc39a56e324f2dac4f6b1",
      "name": "Bray Charlotte",
      "nationality": "British (English)",
      "website": "http://charlottebray.co.uk/",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1982"
    },
    {
      "_id": "633cc39a56e324f2dac4f6b4",
      "name": "Brouwer Margaret",
      "nationality": "American",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1940"
    },
  ];

  const courses2 = [
    {
      "_id": "633cc39a56e324f2dac4f6b6",
      "name": "Burrell Diana",
      "nationality": "British (English)",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1948"
    },
    {
      "_id": "633cc39a56e324f2dac4f6b8",
      "name": "Carwithen Doreen",
      "nationality": "British (English)",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1922-2003"
    },
    {
      "_id": "633cc39a56e324f2dac4f6c2",
      "name": "Czernowin Chaya",
      "nationality": "Israeli American",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1957",
      tag: "Most polular",
      tagColor: "#ffe799",
    },
    {
      "_id": "633cc39a56e324f2dac4f6c5",
      "name": "Desportes Yvonnes",
      "nationality": "French",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1907-1993"
    },
    {
      "_id": "633cc39a56e324f2dac4f6cb",
      "name": "Epstein Marti",
      "nationality": "American",
      "website": "She does not have a website.",
      "biography": "There are no information at this moment.",
      "image": "../../img/placeholder.png",
      "DOB": "1959"
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
          <SwiperSlide><HomeListItem courses={courses}/></SwiperSlide>
          <SwiperSlide><HomeListItem courses={courses2}/></SwiperSlide>
        </Swiper>
      </>
  );
};

export default HomeComposer;
