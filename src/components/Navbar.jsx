import logo from "./../assets/images/logo.png";
import StyledNavbar, {
  StyledNavList,
  StyledNavLink,
  StyledContainer,
} from "../styled/StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      {/*  Logo */}
      <StyledContainer>
        <img src={logo} alt="logo" />
      </StyledContainer>
      {/*  Nav links */}
      <StyledContainer>
        <StyledNavList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cart"> Cart </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about"> About </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact"> Contact </StyledNavLink>
          </li>
        </StyledNavList>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default Navbar;
