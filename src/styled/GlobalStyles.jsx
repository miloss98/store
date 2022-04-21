import { createGlobalStyle } from "styled-components";
import "./../index.css";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Quicksand";
}
ul{
  outline: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul li{
    padding: 1rem;
}

`;
export default GlobalStyles;
