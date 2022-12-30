import styled from "styled-components";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import RightSidebar from "../components/RightSidebar";
import ItemLists from "../components/QuestionList/ItemLists";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const StyledSection = styled.section`
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  min-height: 1200px;
  height: 100%;
  border-left: 1px solid #d7d9dc;
  display: flex;
  justify-content: space-between;
`;

const MainSection = styled.div`
  width: 100%;
`;

const Questions = styled.div`
  width: auto;
  margin-bottom: 20px;
  margin-left: -24px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 24px;
`;
const AllQuestions = styled.div`
  font-size: 30px;
`;
const AskQuestion = styled.div`
  font-size: 14px;
  width: 103px;
  height: 38px;
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  position: relative;
  right: 0;
  box-shadow: inset 0 1.5px 0 0 #80c0ff;
  background-color: #0995ff;
  color: white;
  &:hover {
    background-color: #0a5dc1;
    color: white;
    cursor: pointer;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-bottom: 10px;
  word-break: break-all;
  margin-left: 24px;
`;
const SortButton = styled.button`
  height: 34px;
  background-color: white;
  outline: 0;
  color: #6a737d;
  border: 1px groove #6a737d52;
  border-radius: 3px 0 0 3px;
  &:hover {
    background-color: #d9d9d9;
    cursor: pointer;
  }
`;
const SortButtonLeft = styled(SortButton)`
  border-right: 0px;
`;
const HeadlineContainer = styled.div`
  border-bottom: 1px solid #d7d9dc;
  margin-left: -24px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Domain = ({ questionData, loading }) => {
  return (
    <>
      <Container>
        <LeftSidebar />
        <StyledSection>
          <MainSection>
            <HeadlineContainer>
              <TopContainer>
                <AllQuestions>All Questions</AllQuestions>
                <LinkStyled to="/ask">
                  <AskQuestion>Ask Question</AskQuestion>
                </LinkStyled>
              </TopContainer>
              <ButtonContainer>
                <div>{!loading && questionData ? questionData.length : "Loading..."} questions</div>
                <div>
                  <SortButtonLeft>Newest</SortButtonLeft>
                  <SortButton>Unanswered</SortButton>
                </div>
              </ButtonContainer>
            </HeadlineContainer>
            <Questions>
              {!loading && questionData ? <ItemLists questionData={questionData} /> : "Loading..."}
            </Questions>
          </MainSection>
          <RightSidebar />
        </StyledSection>
      </Container>
      <Footer />
    </>
  );
};

export default Domain;
