import logo from "./../assets/images/logo.png";

import StyledNavbar, { StyledNavLink } from "../styled/StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <section>
        <ul>
          <li>
            <StyledNavLink to="/"> Home </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about"> About </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact"> Contact </StyledNavLink>
          </li>
        </ul>
      </section>
    </StyledNavbar>
  );
};

export default Navbar;
