import "./App.css";
import styled from "styled-components";
import Domain from "./pages/Domain";
import Header from "./components/Header";

const StyledApp = styled.div`
  margin-top: 50px;
`;

function App() {
  return (
    <>
      <Header />
      <StyledApp>
        <Domain />
      </StyledApp>
    </>
  );
}

export default App;
