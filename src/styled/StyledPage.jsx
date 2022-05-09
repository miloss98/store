import styled from "styled-components";

const StyledPage = styled.div`
  width: 100vw;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
`;
export const StyledContainer = styled.div`
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 70%;
    text-align: center;

    h1 {
      padding: 3rem 0rem 5rem 0rem;
      font-size: 2rem;
      font-weight: 600;
    }
    h2 {
      padding-bottom: 2rem;
      font-size: 1.2rem;
      font-weight: 600;
    }
    p {
      font-size: 1.2rem;
      letter-spacing: 2px;
      padding-bottom: 1.5rem;
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
  }
`;
export default StyledPage;
