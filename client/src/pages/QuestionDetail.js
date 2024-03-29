import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../util/useFetch";
import { UpVote, DownVote } from "../img/index";
import { useState } from "react";
import { answerCreate } from "../util/API";
import swal from "sweetalert";
import {
  Footer,
  LeftSidebar,
  RightSidebar,
  Delete,
  QuestionViewer,
  InputEditor,
  AnswerLists,
} from "../components/index";

const InnerContent = styled.div`
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
  @media screen and (max-width: 980px) {
    width: 100%;
  }
  width: calc(100% - 224px);
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

const AskLinkStyled = styled.button`
  border: 0;
  background-color: #fff;
  text-decoration: none;
  color: #fff;
`;

const EditLinkStyled = styled(Link)`
  text-decoration: none;
  color: #6a737c;
  margin: 4px;
  :hover {
    color: #838c95;
  }
`;

const AnswerHeader = styled.div`
  width: 100%;
  margin-top: 10px;
  align-items: center;
  font-weight: 400;
  line-height: 1.3;
  font-size: 20px;
`;

const AnswerTitle = styled.div`
  padding-top: 20px;
  margin-bottom: 19px;
  color: #232629;
  font-size: 20px;
  font-weight: 500;
`;

const PostAnswerBtn = styled.button`
  width: 133px;
  height: 40px;
  font-size: 14px;
  padding: 10px;
  margin: 30px 2px 0 2px;
  border: 1px solid #0995ff;
  border-radius: 3px;
  background-color: #0995ff;
  color: #ffffff;
  box-shadow: inset 0 1px 0 0 #80c0ff;

  :hover {
    background-color: #0a5dc1;
    cursor: pointer;
  }
`;

const QuestionDetail = () => {
  const [answer, setAnswer] = useState("");
  const { id } = useParams();
  const { questionData, loading } = useFetch("questions", id);
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("Authorization");

  if (questionData && !loading) {
    const {
      title,
      content,
      createdAt,
      modifiedAt,
      view,
      question_recommend,
      userInfo,
      answer_list,
    } = questionData;

    const nextLevel = () => {
      if (jwtToken) {
        navigate("/ask");
      } else {
        swal("권한이 없습니다.", "로그인을 해주셔야 합니다.", "warning");
        navigate("/login");
      }
    };
    const onCreate = async () => {
      await answerCreate(id, answer);
      setAnswer("");
    };
    const goTo = () => {
      if (answer === "") {
        swal("답변 작성 실패", "빈칸이 있습니다. 내용을 채워주셔야 합니다.", "warning");
      } else if (jwtToken === null) {
        navigate(`/login`);
      } else {
        onCreate();
      }
    };

    const cYMD = createdAt.slice(0, 10);
    const cTIME = createdAt.slice(11);
    const mYMD = modifiedAt.slice(0, 10);
    const mTIME = modifiedAt.slice(11);

    return (
      <>
        <InnerContent>
          <LeftSidebar />
          <StyledSection>
            <QuestionHeader>
              <QuestionTitle>{title}</QuestionTitle>
              <AskLinkStyled onClick={nextLevel}>
                <AskQuestion>Ask Question</AskQuestion>
              </AskLinkStyled>
            </QuestionHeader>
            <QuestionInfo>
              <div className="infoContainer">
                <span>Asked</span>{" "}
                <span>
                  {cYMD} {cTIME}
                </span>
              </div>
              <div className="infoContainer">
                <span>Modified</span>{" "}
                <span>
                  {mYMD} {mTIME}
                </span>
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
                  <QuestionContent>
                    <QuestionViewer content={content} />
                  </QuestionContent>
                  <EditUserContainer>
                    <div className="container">
                      <div className="order-button">
                        <EditLinkStyled to={`/edit`} state={{ id, title, content }}>
                          Edit
                        </EditLinkStyled>
                        <Delete id={id} employer="question" />
                      </div>
                      <UserInfo>{userInfo}</UserInfo>
                    </div>
                  </EditUserContainer>
                </QuestionBody>
              </div>
              <AnswerHeader>{answer_list.length} Answers</AnswerHeader>
              <div className="answers">
                <AnswerLists answerData={answer_list} id={id} />
                <form className="post-form">
                  <AnswerTitle>Your Answer</AnswerTitle>
                  <InputEditor setContent={setAnswer} />
                  <PostAnswerBtn onClick={goTo}>Post Your Answer</PostAnswerBtn>
                </form>
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
