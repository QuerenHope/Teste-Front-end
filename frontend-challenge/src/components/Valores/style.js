import styled from "styled-components";

export const Container = styled.div`
  color: rgba(93, 156, 236, 1);
  font-style: italic;
  padding: 2rem;

  h3 {
    border-bottom: 0.5px solid rgba(93, 155, 236, 0.26);
    font-weight: 900;
    font-size: 17px;
  }
  .valor_1 {
    display: flex;
    margin-top: 1rem;
    font-size: 15px;
  }
  .valor {
    display: flex;
    margin-top: 1rem;
    font-size: 15px;
  }

  .valor p + p {
    margin-left: 6px;
    font-weight: 900;
  }
  .valor_1 p + p {
    margin-left: 6px;
    font-weight: 900;
  }

  @media (max-width: 425px) {
    margin: 0;
  }
`;
