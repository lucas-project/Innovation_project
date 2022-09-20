import Courses from "./Courses";

import djangoEcomImg from "../img/django_ecommerce.jpg";
import djangoFullImg from "../img/django_fullstack.jpg";
import pythonImg from "../img/python_django.jpg";
import buildPyImg from "../img/build_python.jpg";
import reactDjImg from "../img/react_django.jpg";

const WishlistCourses = () => {
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
  return (
    <Courses
      heading='Because you wishlisted '
      link='“Django with React | An Ecommerce Website”'
      courses={courses}
    />
  );
};

export default WishlistCourses;
