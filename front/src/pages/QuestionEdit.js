import { useState } from "react";
import styled from "styled-components";
import { Link, useParams, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import { questionUpdate } from "../util/questionAPI";

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
const StyledSection = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  height: 1080px;
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
const TipBox = styled.div`
  width: 100%;
  height: 120px;
  background: #fdf7e2;
  border-radius: 3px;
  border: 2px solid #e6cf79;
`;
const TextAreaName = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  color: #18191a;
  border-radius: 5px;
  padding: 10px;
`;
const MainArea = styled(TextArea)`
  height: 200px;
`;
const ResultArea = styled.div`
  margin-top: 20px;
  height: 300px;
`;
const ResultTitle = styled.div`
  font-size: 2.07692308rem;
`;
const ResultContent = styled.div``;
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
  margin-right: 10px;
  box-shadow: inset 0 1.5px 0 0 #80c0ff;
  background-color: #0995ff;
  color: white;
  &:hover {
    background-color: #0a5dc1;
    cursor: pointer;
  }
`;
const CancelButton = styled(ButtonSample)`
  color: #004fb5;
  &:hover {
    background-color: #ecf6ff;
    cursor: pointer;
  }
`;
const CancelLink = styled(Link)`
  color: #004fb5;
  text-decoration: none;
`;

const QuestionEdit = () => {
  const url = "http://localhost:3001/Question"; /* 추후 수정*/
  const { id } = useParams(); /*임의로 넣어주었다 */
  const location = useLocation();
  const testTitle = location.state.title;
  const testContent = location.state.content;
  console.log(testTitle);
  console.log(testContent);

  const [editTitle, setEditTitle] = useState(`${testTitle}`);
  const [editContent, setEditContent] = useState(`${testContent}`);
  /*fake 서버 양식에 맞추어 작성*/
  /*기존 데이터를 받아와서 화면 출력 후 편집 하고 싶다면 정보를 받아와야 한다. 어떻게?*/

  /*answer list 는 어떻게 받아와야 하나 고민 */
  /*화면에 노출되지 않는 정보는 어떻게 처리할지 고민*/
  // console.log(id);

  const onEdit = () => {
    questionUpdate(url, id, editTitle, editContent);
    setEditTitle();
    setEditContent();
  };
  return (
    <>
      <Container>
        <LeftSidebar />
        <StyledSection>
          <MainSection>
            <EditBox>
              <TipBox>sample</TipBox>
              <TextAreaName>Title</TextAreaName>
              <TextArea
                type="text"
                value={editTitle}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                  console.log(e.target.value);
                }}
              ></TextArea>
              <TextAreaName>Body</TextAreaName>
              <MainArea
                type="text"
                value={editContent}
                onChange={(e) => {
                  setEditContent(e.target.value);
                  console.log(e.target.value);
                }}
              ></MainArea>
              <ResultArea>
                <ResultTitle>{editTitle}</ResultTitle>
                <div></div>
                <ResultContent>{editContent}</ResultContent>
              </ResultArea>
              <ButtonCarrier>
                <Link to={`/question/${id}`}>
                  <SaveButton
                    onClick={() => {
                      onEdit();
                      console.log(onEdit());
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
