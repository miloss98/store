import styled from "styled-components";

const StyledSingleProductPage = styled.div`
  height: 86vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  button {
    height: 2rem;
    width: 5.5rem;
    background: var(--btn-hover);
    color: white;
    border: none;
    border-radius: 0.3rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;

export const StyledSingleProductContainer = styled.section`
  height: 65%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--item-background);
  border-radius: 15px;
`;
export const StyledSingleProductSection = styled.section`
  width: 45%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    height: 100%;
    width: 90%;
    border-radius: 10px;
  }
  h1 {
    color: var(--btn-active);
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
  }
  span {
    color: var(--btn-hover);
  }
  p {
    padding-bottom: 0.3rem;
    font-weight: 600;
  }
`;

export default StyledSingleProductPage;
