import StyledPage, { StyledContainer } from "../styled/StyledPage";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <StyledPage>
      <StyledContainer>
        <div>
          <h1>
            Error 404! <br></br> Page not found!
          </h1>
          <button onClick={() => navigate(-1)}> Go back </button>
        </div>
      </StyledContainer>
    </StyledPage>
  );
};

export default ErrorPage;
