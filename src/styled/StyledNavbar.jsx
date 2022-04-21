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
`;
export const StyledContainer = styled.div`
  img {
    height: 100px;
    width: 250px;
  }
`;
export const StyledNavList = styled.ul`
  outline: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--secondary);
  text-decoration: none;
  padding: 1rem;
  &:hover {
    color: var(--btn-hover);
  }
  &.active {
    color: var(--btn-active);
  }
`;
export default StyledNavbar;
