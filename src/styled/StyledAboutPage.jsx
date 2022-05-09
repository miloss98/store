import styled from "styled-components";

const StyledAboutPage = styled.div`
  width: 100vw;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
`;

export const StyledAboutContainer = styled.section`
  width: 60vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--item-background);

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
    p {
      font-size: 1.2rem;
      letter-spacing: 2px;
      padding-bottom: 1.5rem;
    }
  }
`;

export default StyledAboutPage;
