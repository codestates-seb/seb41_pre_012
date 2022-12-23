import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Domain from "./pages/Domain";
import Header from "./components/Header";
import QuestionDetail from "./pages/QuestionDetail";
import AskQuestion from "./pages/AskQuestion";
import QuestionEdit from "./pages/QuestionEdit";
import useFetch from "./util/useFetch";

const StyledApp = styled.div`
  margin-top: 50px;
`;

function App() {
  const url = "http://localhost:3001/Question";
  const { questionData, loading } = useFetch(url);
  return (
    <BrowserRouter>
      <Header />
      <StyledApp>
        <Routes>
          <Route path="/" element={<Domain questionData={questionData} loading={loading} />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route
            path="/question"
            element={<QuestionDetail questionData={questionData} loading={loading} />}
          />
          <Route path="/edit" element={<QuestionEdit />} />
          {/* <Route path="/" element={<Domain />} /> */}
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
