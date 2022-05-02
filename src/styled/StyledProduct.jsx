import styled from "styled-components";

const StyledProduct = styled.article`
  height: 500px;
  width: 350px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--item-background);

  img {
    height: 240px;
    width: 300px;
  }
`;

export default StyledProduct;
