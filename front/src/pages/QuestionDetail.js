import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import RightSidebar from "../components/RightSidebar";
import useFetch from "../util/useFetch";
// 나중에 나머지 svg도 불러오기
// import { UpVote, UpVoteDone, DownVote, DownVoteDone, CheckIcon, CheckedIcon } from "../img/index";
import { UpVote, DownVote } from "../img/index";

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
const QuestionInfo = styled.div`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  border-bottom: 1px solid #e3e6e8;
  .infoContainer {
    white-space: nowrap;
    margin-bottom: 8px;
    margin-right: 16px;
    span:nth-child(1) {
      color: #6a737c;
      margin-right: 2px;
      font-size: 13px;
    }
    span:nth-child(2) {
      font-size: 13px;
    }
  }
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
  button {
    background: linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
    border: 1px solid #ffffff;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    font: unset;
    user-select: auto;
    outline: initial;
    margin: 2px;
  }
  .recommend {
    margin: 2px;
    display: flex;
    font-size: 1.61538462rem;
    align-items: center;
    flex-direction: column;
    color: #6a737c;
  }
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
const Delete = styled.div`
  text-decoration: none;
  color: #6a737c;
  margin: 4px;
  cursor: pointer;
`;

const QuestionDetail = () => {
  const url = "http://localhost:3001/Question";
  const { id } = useParams();
  const { questionData, loading } = useFetch(`${url}/${id}`);

  if (questionData && !loading) {
    const { title, content, createdAt, modifiedAt, view, question_recommend, username } =
      questionData;

    return (
      <>
        <InnerContent>
          <LeftSidebar />
          <StyledSection>
            <QuestionHeader>
              <QuestionTitle>{title}</QuestionTitle>
              <AskQuestion>
                <AskLinkStyled to="/ask">Ask Question</AskLinkStyled>
              </AskQuestion>
            </QuestionHeader>
            <QuestionInfo>
              <div className="infoContainer">
                <span>Asked</span> <span>{createdAt}</span>
              </div>
              <div className="infoContainer">
                <span>Modified</span> <span>{modifiedAt}</span>
              </div>
              <div className="infoContainer">
                <span>Viewed</span>
                <span> {view} times</span>
              </div>
            </QuestionInfo>
            <PostLayout>
              <div className="post-layout">
                <QuestionVote>
                  <VoteContainer>
                    <button>
                      <img src={UpVote} alt="Up vote button" />
                    </button>
                    <div className="recommend">{question_recommend}</div>
                    <button>
                      <img src={DownVote} alt="Down vote button" />
                    </button>
                  </VoteContainer>
                </QuestionVote>
                <QuestionBody>
                  <QuestionContent>{content}</QuestionContent>
                  <EditUserContainer>
                    <div className="container">
                      <div className="order-button">
                        <EditLinkStyled to="/edit">Edit</EditLinkStyled>
                        <Delete>Delete</Delete>
                      </div>
                      <UserInfo>{username}</UserInfo>
                    </div>
                  </EditUserContainer>
                </QuestionBody>
              </div>
            </PostLayout>
            <RightSidebar />
          </StyledSection>
        </InnerContent>
        <Footer />
      </>
    );
  } else {
    ("Loading...");
  }
};

export default QuestionDetail;
