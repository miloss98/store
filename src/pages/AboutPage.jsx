import StyledPage, { StyledContainer } from "../styled/StyledPage";

const AboutPage = () => {
  return (
    <StyledPage>
      <StyledContainer backgroundColor={"var(--item-background)"}>
        <div>
          <h1>About page</h1>
          <h2> Informations: </h2>
          <p>
            {" "}
            This is a React.js project. Project is made of external libraries
            and other tools like: React Router DOM, Styled Components, Axios and
            Fake Store API{" "}
          </p>
        </div>
      </StyledContainer>
    </StyledPage>
  );
};

export default AboutPage;
