import styled from "styled-components";

const StyledAllProducts = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeadingDiv = styled.div`
  height: 200px;
  width: 100%;
  padding-top: 2rem;
  h1 {
    text-align: center;
    font-size: 2rem;
    color: var(--btn-active);
  }
`;

export const StyledProductsContainer = styled.section`
  width: 95%;
  height: 95%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 25% 25% 25% 25%;
  column-gap: 1rem;
  row-gap: 1rem;
  margin: 1rem;
`;

export default StyledAllProducts;
