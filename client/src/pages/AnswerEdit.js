import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import { answerUpdate } from "../util/API";
import InputEditor from "../components/InputEditor";
import QuestionViewer from "../components/Viewer";
import swal from "sweetalert";

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media screen and (max-width: 1150px) {
    height: 1920px;
  }
  @media screen and (max-width: 800px) {
    height: 2100px;
  } ;
`;
const StyledSection = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  border-left: 1px solid #d7d9dc;
  display: flex;
  flex-direction: column;
`;
const MainSection = styled.div`
  width: calc(100% - 150px);
  display: flex;
  flex-direction: row;
`;
const EditBox = styled.div`
  width: 100%;
  height: 1000px;
`;
const TextAreaAnswer = styled.div`
  font-size: 35px;
  margin: 20px 0 8% 0;
`;
const ResultArea = styled.div`
  margin-top: 20px;
  height: auto;
`;
const ButtonCarrier = styled.div`
  margin-top: 10px;
  width: 80%;
  display: flex;
`;
const ButtonSample = styled.button`
  font-size: 14px;
  width: 103px;
  height: 38px;
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  position: relative;
  right: 0;
`;
const SaveButton = styled(ButtonSample)`
  width: 130px;
  height: 45px;
  padding: 1px 6px;
  margin: 10px 8px 0 0;
  color: #ffffff;
  border: 1px solid #0a95ff;
  background-color: #0a95ff;
  border-radius: 3px;
  :hover {
    background-color: #0074cc;
    cursor: pointer;
  }
`;
const CancelButton = styled(ButtonSample)`
  width: 97px;
  height: 45px;
  padding: 1px 6px;
  color: #c22e32;
  border: none;
  border-radius: 3px;
  margin-top: 10px;
  :hover {
    background-color: #fdf2f2;
    cursor: pointer;
  }
`;
const CancelLink = styled(Link)`
  color: #c22e32;
  text-decoration: none;
`;
const AnswerEdit = () => {
  const location = useLocation();
  const qid = location.state.qid;
  const aid = location.state.aid;
  const content = location.state.content;
  const navigate = useNavigate();

  const [editContent, setEditContent] = useState(`${content}`);

  const onEdit = () => {
    answerUpdate(aid, editContent);
    setEditContent();
  };
  const goTo = () => {
    if (editContent === "") {
      swal("답변 수정 불가", "내용을 입력해야 합니다.", "error");
    } else {
      navigate(`/question/${qid}`);
      onEdit();
    }
  };
  return (
    <>
      <Container>
        <LeftSidebar />
        <StyledSection>
          <MainSection>
            <EditBox>
              <TextAreaAnswer>Answer</TextAreaAnswer>
              <InputEditor setContent={setEditContent} />
              <ResultArea>
                <QuestionViewer content={editContent} />
              </ResultArea>
              <ButtonCarrier>
                <SaveButton onClick={goTo}>SaveEdits</SaveButton>
                <CancelButton>
                  <CancelLink to={`/question/${qid}`}>Cancel</CancelLink>
                </CancelButton>
              </ButtonCarrier>
            </EditBox>
          </MainSection>
        </StyledSection>
      </Container>
      <Footer />
    </>
  );
};

export default AnswerEdit;
