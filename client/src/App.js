import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Domain from "./pages/Domain";
import Header from "./components/Header";
import QuestionDetail from "./pages/QuestionDetail";
import AskQuestion from "./pages/AskQuestion";
import QuestionEdit from "./pages/QuestionEdit";
import AnswerEdit from "./pages/AnswerEdit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
// import { questionRead } from "./util/questionAPI";
const StyledApp = styled.div`
  margin-top: 50px;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <StyledApp>
        <Routes>
          <Route path="/" element={<Domain />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          <Route path="/edit" element={<QuestionEdit />} />
          <Route path="/answeredit" element={<AnswerEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
