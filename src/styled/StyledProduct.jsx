import styled from "styled-components";

const StyledProduct = styled.article`
  height: 500px;
  width: 320px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--item-background);
  padding-top: 1rem;
  h4 {
    height: 15%;
    width: 80%;
    font-size: 1.1rem;
    text-align: center;
  }
  img {
    height: 50%;
    width: 95%;
  }
  p {
    font-weight: bold;
    color: var(--background);
  }
  p span {
    color: var(--btn-hover);
  }
`;
export const StyledDetails = styled.div`
  height: 10%;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  background: var(--btn-active);
  color: var(--black);
  font-weight: bolder;
  font-size: 0.8rem;
  padding: 0.5rem;
  & {
    cursor: pointer;
  }
  &:hover {
    filter: brightness(80%);
  }
`;

export default StyledProduct;
