import StyledAboutPage, {
  StyledAboutContainer,
} from "../styled/StyledAboutPage";

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <StyledAboutContainer>
        <div>
          <h1>About page</h1>
          <p> Informations: </p>
          <p>
            {" "}
            This is a React.js project. Project is made of external libraries
            and other tools like: React Router DOM, Styled Components, Axios and
            Fake Store API{" "}
          </p>
        </div>
      </StyledAboutContainer>
    </StyledAboutPage>
  );
};

export default AboutPage;
