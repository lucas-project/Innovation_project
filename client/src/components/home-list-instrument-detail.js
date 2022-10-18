import styled from "styled-components";
import composerP from "../../src/img/kubernetes.jpg";
const HomeListComposerDetail = ({
                                   instrument
                                }) => {
    return (
        <StyledCourseCard>
            <div className='course-container'>
                <div className='img-container'>
                    <img src={composerP} alt='course image' />
                </div>
                <div className='course-content'>
                    <h5>{instrument}</h5>
                </div>
            </div>
        </StyledCourseCard>
    );
};

const StyledCourseCard = styled.a`
  cursor: pointer;
  color: #3b3c37;
  img {
    border-radius: 3px;

    &:hover {
      opacity: 0.9;
    }
  }

  h5 {
    padding-top: 0.7rem;
    letter-spacing: 0.02rem;
    color: #3b3c37;
  }
  p {
    padding-top: 0.3rem;
    color: #3b3c37;
    font-size: 0.8rem;
  }

  .ratNum {
    color: #3b3c37;
    font-weight: 400;
    padding-left: 1rem;
  }

  .stars {
    padding-left: 0.2rem;
  }

  i {
    color: #eb8a2f;
  }

  .tag {
    display: inline-block;
    border-radius: 3px;
    background: ${(props) => props.tagColor};
    padding: 0.3rem;
    font-size: 0.7rem;
    color: #593d00;
    font-weight: bold;
  }

  @media (max-width: 1080px) {
    .course-container {
      display: flex;
      width: 100%;

      .img-container {
        height: 25vh;

        img {
          height: 100%;
        }
      }

      .course-content {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: 750px) {
    .course-container {
      flex-direction: column;

      .course-content {
        margin-left: 0;
      }
    }
  }
`;

export default HomeListComposerDetail;