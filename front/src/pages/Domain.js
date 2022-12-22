import styled from "styled-components";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import RightSidebar from "../components/RightSidebar";

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
  height: 1080px;
  padding: 24px 24px 24px 0;
  border-left: 1px solid #d7d9dc;
  background: white;
  display: flex;
`;
const QuestionBox = styled.div`
  width: 70%;
  height: 115px;
  background: white;
`;
const TopContainer = styled.div`
  display: flex;
  padding-top: 10px;
`;
const AllQuestions = styled.div`
  float: right;
  font-size: 30px;
  margin: 0 420px 0 24px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  padding-bottom: 10px;
  word-break: break-all;
`;
const AskQuestion = styled.a`
  font-size: 14px;
  width: 103px;
  height: 38px;
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  box-shadow: inset 0 1.5px 0 0 #80c0ff;
  background-color: #0995ff;
  color: white;
  &:hover{  
    background-color : #0A5DC1;
    color : white;
    cursor: pointer;
`;
const QuestionCount = styled.div`
  margin: 0 320px 0 24px;
`;
const SortButtonContainer = styled.div``;
const SortButton = styled.button`
  height: 34px;
  background-color: white;
  outline: 0;
  &:hover {
    background-color: #d9d9d9;
    cursor: pointer;
  }
`;
const SortButtonLeft = styled(SortButton)`
  border: 1px groove black;
  border-right: 0px;
  border-radius: 3px 0 0 3px;
`;
const SortButtonRight = styled(SortButton)`
  border: 1px groove black;
  border-radius: 0 3px 3px 0;
`;
const QuestionContainer = styled.div`
  background: blue;
`;
const QuestionBoxTest = styled.div`
  height: 140px;
  padding: 20px;
  background: white;
  border-top: 1px solid #d7d9dc;
`;
const Domain = () => {
  return (
    <>
      <Container>
        <LeftSidebar />
        <StyledSection>
          <QuestionBox>
            <TopContainer>
              <AllQuestions>All Questions</AllQuestions>
              <AskQuestion>Ask Question</AskQuestion>
            </TopContainer>
            <ButtonContainer>
              <QuestionCount>23,337,052 questions</QuestionCount>
              <SortButtonContainer>
                <SortButtonLeft>Newest</SortButtonLeft>
                <SortButtonRight>Unanswered</SortButtonRight>
              </SortButtonContainer>
            </ButtonContainer>
            <QuestionContainer>
              <QuestionBoxTest />
              <QuestionBoxTest />
              <QuestionBoxTest />
              <QuestionBoxTest />
              <QuestionBoxTest />
              <QuestionBoxTest />
            </QuestionContainer>
          </QuestionBox>
          <RightSidebar />
        </StyledSection>
      </Container>
      <Footer />
    </>
  );
};

export default Domain;
