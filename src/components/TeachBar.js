import styled from "styled-components";
import { Link } from "../styles";

import ContentBar from "./ContentBar";

const TeachBar = () => {
  return (
    <StyledTeachBar>
      <ContentBar>
        <div className='left-content'>
          <h4>A promotion for female composer</h4>
          <p>
            Create an account and connect to thousands of other classical music lovers.
          </p>
        </div>
        <div className='right-content'>
          <Link href='#'>Join us as composer</Link>
        </div>
      </ContentBar>
    </StyledTeachBar>
  );
};

const StyledTeachBar = styled.div`
  h4 {
    font-size: 1.2rem;
    padding-bottom: 0.4rem;
    color: #3b3c37;
  }

  p {
    color: #3b3c37;
  }

  @media (max-width: 1300px) {
    .left-content {
      text-align: center;
    }

    .right-content {
      margin-top: 1.5rem;
    }
  }
`;

export default TeachBar;
