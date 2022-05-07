import styled from "styled-components";

const StyledErrorPage = styled.div`
  width: 100vw;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
`;

export const StyledErrorContainer = styled.section`
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--red);
  border-radius: 0.5rem;

  p {
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }

  button {
    margin-top: 3rem;
    height: 2rem;
    width: 5rem;
    background: var(--btn-hover);
    color: white;
    border: none;
    border-radius: 0.5rem;
    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;

export default StyledErrorPage;
