import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import RightSidebar from "../components/RightSidebar";
import useFetch from "../util/useFetch";

const InnerContent = styled.div`
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
`;
const QuestionHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const QuestionTitle = styled.h1`
  overflow-wrap: break-word !important;
  font-size: 2.07692308rem;
  margin-bottom: 8px;
  flex: 1 auto !important;
  line-height: 1.3;
`;
const AskQuestion = styled.a`
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
const QuestionInfo = styled.div`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  border-bottom: 1px solid #e3e6e8;
`;
const PostLayout = styled.div`
  width: calc(100% - 324px);
  float: left;
  .post-layout {
    display: grid;
    grid-template-columns: max-content 1fr;
  }
`;
const QuestionVote = styled.div`
  width: auto;
  padding-right: 16px;
  vertical-align: top;
  grid-column: 1;
`;
const VoteContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  color: #babfc4;
`;
const QuestionBody = styled.div`
  vertical-align: top;
  padding-right: 16px;
  grid-column: 2;
  width: auto;
  min-width: 0;
`;
const QuestionContent = styled.div`
  width: 100%;
  line-height: 25px;
`;
const EditUserContainer = styled.div`
  margin-bottom: 0;
  .container {
    display: flex;
    padding-top: 4px;
    margin: 16px;
    margin-left: 0;
    margin-top: 4px;
    align-items: flex-start !important;
    justify-content: space-between;
    flex-wrap: wrap;
    .order-button {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const UserInfo = styled.div`
  box-sizing: border-box;
  padding: 5px 6px 7px 7px;
  color: #6a737c;
  margin: 0 4px;
  border-radius: 3px;
  background-color: rgb(220, 234, 240);
  text-align: left;
  vertical-align: top;
  width: 200px;
`;

const AskLinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const EditLinkStyled = styled(Link)`
  text-decoration: none;
  color: #6a737c;
  margin: 4px;
`;

const QuestionDetail = ({ questionData, loading }) => {
  const { title, content, createdAt, view, question_recommend, username } = questionData;
  return (
    <>
      {!loading && questionData ? (
        <InnerContent>
          <LeftSidebar />
          <StyledSection>
            <QuestionHeader>
              <QuestionTitle>{title}</QuestionTitle>
              <AskQuestion>
                <AskLinkStyled to="/ask">Ask Question</AskLinkStyled>
              </AskQuestion>
            </QuestionHeader>
            <QuestionInfo>Asked today Modified today Viewed 16 times</QuestionInfo>
            <PostLayout>
              <div className="post-layout">
                <QuestionVote>
                  <VoteContainer>
                    <button>⬆️</button>
                    <div>{question_recommend}</div>
                    <button>⬇️</button>
                  </VoteContainer>
                </QuestionVote>
                <QuestionBody>
                  <QuestionContent>
                    I am trying to get the last message id in a chat using the aiogram library in
                    Python. I have tried using the .get_last_message() method, but it returns None.
                    Is there another way to get the last message id in a chat using aiogram?
                  </QuestionContent>
                  <EditUserContainer>
                    <div className="container">
                      <div className="order-button">
                        <EditLinkStyled to="/edit">Edit</EditLinkStyled>
                        <div>Delete</div>
                      </div>
                      <UserInfo>John Doe</UserInfo>
                    </div>
                  </EditUserContainer>
                </QuestionBody>
              </div>
            </PostLayout>
            <RightSidebar />
          </StyledSection>
        </InnerContent>
      ) : (
        "Loading..."
      )}
      <Footer />
    </>
  );
};

export default QuestionDetail;
