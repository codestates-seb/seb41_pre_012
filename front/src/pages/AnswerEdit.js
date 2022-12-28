import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import { answerUpdate } from "../util/answerAPI";
import InputEditor from "../components/InputEditor";
import QuestionViewer from "../components/Viewer";

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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

const QuestionEdit = () => {
  const url = "http://localhost:3001/Answer"; /* 추후 수정*/
  /*id는 페이지 라우팅에 활용해야 되기때문에 params로 따로 받아 온다*/
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.title;
  const content = location.state.content;
  console.log(title);
  console.log(content);

  const [editContent, setEditContent] = useState(`${content}`);
  /*fake 서버 양식에 맞추어 작성*/

  /*answer list 는 어떻게 받아와야 하나 고민 */
  const onEdit = () => {
    answerUpdate(url, id, editContent);
    setEditContent();
  };
  return (
    <>
      <Container>
        <LeftSidebar />
        <StyledSection>
          <MainSection>
            <EditBox>
              <TextAreaAnswer>Answer</TextAreaAnswer>
              <InputEditor content={editContent} setContent={setEditContent} />
              <ResultArea>
                <QuestionViewer content={editContent} />
              </ResultArea>
              <ButtonCarrier>
                <Link to={`/question/${id}`}>
                  <SaveButton
                    onClick={() => {
                      !(editContent === "")
                        ? onEdit()
                        : alert("답변이 작성 되어야 합니다.");
                    }}
                  >
                    SaveEdits
                  </SaveButton>
                </Link>
                <CancelButton>
                  <CancelLink to={`/question/${id}`}>Cancel</CancelLink>
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

export default QuestionEdit;
