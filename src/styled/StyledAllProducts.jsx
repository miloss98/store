import styled from "styled-components";

const StyledAllProducts = styled.div`
  width: 100%;
  min-height: 86vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeadingDiv = styled.div`
  height: 120px;
  width: 100%;
  padding-top: 2rem;
  h1 {
    text-align: center;
    font-size: 2rem;
    color: var(--btn-active);
  }
`;
export const StyledFilterButtonsDiv = styled.div`
  height: 80px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);

  button {
    width: 7rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    margin-left: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--black);
    background-color: var(--btn-hover);
    & {
      cursor: pointer;
    }
    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const StyledProductsContainer = styled.section`
  width: 95%;
  height: 95%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  margin: 1rem;
`;

export default StyledAllProducts;
