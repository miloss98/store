import styled from "styled-components";

const StyledSingleProductPage = styled.div`
  height: 86vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
`;

export const StyledSingleProductContainer = styled.section`
  height: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--item-background);
  border-radius: 15px;
`;
export const StyledSingleProductSection = styled.section`
  width: 45%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    height: 100%;
    width: 90%;
    border-radius: 10px;
  }
`;

export default StyledSingleProductPage;
