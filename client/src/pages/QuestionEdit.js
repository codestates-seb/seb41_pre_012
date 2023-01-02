import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import { questionUpdate } from "../util/API";
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
  }
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
const TipBox = styled.div`
  width: 100%;
  height: 120px auto;
  padding: 10px;
  background: #fdf7e2;
  border-radius: 3px;
  border: 2px solid #e6cf79;
`;
const Tipp = styled.p`
  margin: 5px 0 0 5px;
  font-size: 15px;
`;
const TextAreaName = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;
const TextArea = styled.input`
  width: 100%;
  color: #18191a;
  border-radius: 5px;
  border: 1px solid #e3e6e8;
  padding: 10px;
`;
// const MainArea = styled.textarea`
//   width: 100%;
//   height: 250px;
//   color: #18191a;
//   border-radius: 5px;
//   border: 1px solid #e3e6e8;
//   padding: 10px;
//   overflow: scroll;
// `;
const ResultArea = styled.div`
  margin-top: 20px;
  height: auto;
`;
const ResultTitle = styled.div`
  font-size: 2.07692308rem;
`;
// const ResultContent = styled.div`
//   margin-top: 50px;
// `;
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
  /* 추후 수정*/
  /*id는 페이지 라우팅에 활용해야 되기때문에 params로 따로 받아 온다*/
  const location = useLocation();
  const id = location.state.id;
  const title = location.state.title;
  const content = location.state.content;
  const navigate = useNavigate();

  const [editTitle, setEditTitle] = useState(`${title}`);
  const [editContent, setEditContent] = useState(`${content}`);
  /*fake 서버 양식에 맞추어 작성*/
  /*기존 데이터를 받아와서 화면 출력 후 편집 하고 싶다면 정보를 받아와야 한다. 어떻게?*/

  /*answer list 는 어떻게 받아와야 하나 고민 */
  /*화면에 노출되지 않는 정보는 어떻게 처리할지 고민*/
  // console.log(id);
  const onEdit = () => {
    questionUpdate(id, editTitle, editContent);
    setEditTitle();
    setEditContent();
  };
  const goTo = () => {
    if (editTitle === "") {
      swal("답변 수정 실패", "제목을 입력해야 합니다.", "error");
    } else if (editContent === "") {
      swal("답변 수정 실패", "내용을 입력해야 합니다.", "error");
    } else {
      navigate(`/question/${id}`);
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
              <TipBox>
                <Tipp>Your edit will be placed in a queue until it is peer reviewed.</Tipp>
                <Tipp>
                  We welcome edits that make the post easier to understand and more valuable for
                  readers. Because community members review edits, please try to make the post
                  substantially better than how you found it, for example, by fixing grammar or
                  adding additional resources and hyperlinks.
                </Tipp>
              </TipBox>
              <TextAreaName>Title</TextAreaName>
              <TextArea
                type="text"
                value={editTitle}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                }}
              ></TextArea>
              <TextAreaName>Body</TextAreaName>
              <InputEditor content={editContent} setContent={setEditContent} />
              <ResultArea>
                <ResultTitle>{editTitle}</ResultTitle>
                <QuestionViewer content={editContent} />
              </ResultArea>
              <ButtonCarrier>
                <SaveButton onClick={goTo}>SaveEdits</SaveButton>
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
