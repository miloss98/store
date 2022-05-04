import styled from "styled-components";

const StyledHomePage = styled.div`
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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1rem;
`;

export default StyledHomePage;
