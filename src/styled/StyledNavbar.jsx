import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./../index.css";

const StyledNavbar = styled.nav`
  height: 14vh;
  width: 100%;
  background-color: var(--navbar);
  display: flex;
  align-items: center;
  justify-content: space-around;

  div img {
    height: 100px;
    width: 250px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  color: red;
  text-decoration: none;
`;
export default StyledNavbar;
