import StyledPage, { StyledContainer } from "../styled/StyledPage";
const ContactPage = () => {
  return (
    <StyledPage>
      <StyledContainer backgroundColor={"var(--btn-active)"}>
        <div>
          <h1>Contact us: </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur
            odit reprehenderit voluptatem eveniet necessitatibus, quae eligendi
            earum labore quod nulla repellendus perspiciatis ipsa quam sint
            officia dolorum delectus natus?
          </p>
        </div>
      </StyledContainer>
    </StyledPage>
  );
};

export default ContactPage;
