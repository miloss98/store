import {
  HomePage,
  CartPage,
  AboutPage,
  ContactPage,
  SingleProductPage,
  ErrorPage,
} from "./pages/index";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styled/GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route index="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="product/:productID" element={<SingleProductPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
