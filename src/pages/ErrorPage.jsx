import StyledErrorPage, {
  StyledErrorContainer,
} from "../styled/StyledErrorPage";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <StyledErrorPage>
      <StyledErrorContainer>
        <p>Error 404!</p>
        <p> Page not found!</p>
        <button onClick={() => navigate(-1)}> Go back </button>
      </StyledErrorContainer>
    </StyledErrorPage>
  );
};

export default ErrorPage;
