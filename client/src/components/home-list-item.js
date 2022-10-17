import styled from "styled-components";
import { Container } from "../styles";
import { Link } from "react-router-dom";
import HomeListItemDetail from "./home-list-item-detail";

const HomeListItem = ({ heading, link, courses }) => {
  return (
    <Container>
      <StyledCourses>
        <h4>
          {heading}
          <a href='#'>{link}</a>
        </h4>
        <div className='suggested-courses'>
          {courses.map((course) => {
              const links = course._id;
            return (
                <Link
                    to={{pathname:"/api/composers/"+links}}
                    state={{
                        _id:course._id,
                        name: course.name,
                        nationality:course.nationality,
                        DOB:course.DOB,
                        website:course.website,
                        biography:course.biography,
                        image:course.image

                    }}
                    key={course.links}
                    style={{ textDecoration: "none", color: "black" }}
                >
              <HomeListItemDetail
                images={course.image}
                names={course.names}
                nationality={course.nationality}
                website={course.website}
                tag={course.tag}
                tagColor={course.tagColor}
              />
                </Link>
            );
          })}
        </div>
      </StyledCourses>
    </Container>
  );
};

const StyledCourses = styled.div`
  width: 95%;
  margin: auto;
  overflow: hidden;

  h4 {
    font-size: 1.6rem;
    margin-top: 3rem;
    color: #3c3b37;
  }
  a {
    font-size: 1.6rem;
    color: #0f7c90;

    &:hover {
      color: #004450;
    }
  }

  .suggested-courses {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    margin-top: 1rem;
  }

  @media (max-width: 1400px) {
    .suggested-courses {
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }
  }
  @media (max-width: 1100px) {
    .suggested-courses {
      grid-template-columns: repeat(1, 1fr);
      justify-items: start;
    }
  }
`;

export default HomeListItem;
