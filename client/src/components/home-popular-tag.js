import styled from "styled-components";
import { Container } from "../styles";
import HomePopularTagCard from "./home-popular-tag-card";

const HomePopularTag = () => {
  const learningTopics = [
    "Cello",
    "Dina Peters",
    "Voilin",
    "Yamaha Piano",
    "Australian composers",
    "Award-winning works",
    "Most polular",
    "Today's special",
    "Stories",
    "Tutorials",
  ];
  return (
    <Container>
      <StyledLearningNext>
        <h4>Explore exciting topics</h4>
        <h5>Topics recommended for you</h5>
        <div className='learning-cards'>
          {learningTopics.map((topic) => {
            return <HomePopularTagCard name={topic} />;
          })}
        </div>
      </StyledLearningNext>
    </Container>
  );
};

const StyledLearningNext = styled.div`
  width: 95%;
  margin: auto;

  h4 {
    color: #3c3b37;
    margin-top: 3rem;
  }

  h5 {
    color: #3c3b37;
    margin-top: 1rem;
    font-size: 1.4rem;
  }

  .learning-cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;

    margin-top: 1rem;
    text-align: center;
  }

  @media (max-width: 900px) {
    h4,
    h5 {
      text-align: center;
    }

    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.2rem;
    }

    .learning-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default HomePopularTag;
