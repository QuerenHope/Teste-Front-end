import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 64vmin;
  gap: 20px;
  color: var(--color-gray);

  @media (max-width: 665px) {
    h1 {
      font-size: 28px;
    }
  }

  @media (min-width: 665px) {
    width: 55vmin;
  }

  .button {
    height: 2rem;
    width: 21rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;

    @media (max-width: 665px) {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    color: var(--color-gray);
  }
  input {
    width: 21rem;
    height: 33px;
    border-radius: 4px;
    border-style: none;
    border: 1px solid rgba(102, 175, 233, 1);
    outline-color: var(--color-blue);

    @media (max-width: 665px) {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  height: 100%;
  width: 100%;
  background-color: var(--color-blue);
  border-style: none;
  color: var(--color-white);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-lightblue);
  }

  @media (max-width: 665px) {
    width: 100%;
  }
`;
