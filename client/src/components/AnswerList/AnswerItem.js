import { Link } from "react-router-dom";
import styled from "styled-components";
import { UpVote, DownVote, CheckIcon, CheckedIcon } from "../../img/index";
import Delete from "../Delete";
import AnswerViewer from "../Viewer";

const AnswerContanier = styled.div`
  border-bottom: 1px solid #e3e6e8;
  width: 100%;
  padding: 16px 0;
  .post-layout {
    display: grid;
    grid-template-columns: max-content 1fr;
  }
`;

const VoteContainer = styled.div`
  width: auto;
  padding-right: 16px;
  vertical-align: top;
  grid-column: 1;
`;
const ButtonContainer = styled.div`
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
  .accepted-answer-indicator {
    margin: 2px;
    padding-top: 6px !important;
    padding-bottom: 6px !important;
    margin-top: calc(8px * -1) !important;
    text-align: center;
  }
`;
const AnswerBody = styled.div`
  vertical-align: top;
  padding-right: 16px;
  grid-column: 2;
  width: auto;
  min-width: 0;
`;
const AnswerContent = styled.div`
  width: 100%;
`;
const EditUserContainer = styled.div`
  margin-top: 24px;

  .container {
    display: flex;
    padding-top: 4px;
    margin: -4px;
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

const EditLinkStyled = styled(Link)`
  text-decoration: none;
  color: #6a737c;
  margin: 4px;
`;

const AnswerItem = ({ answerData, qId }) => {
  const { aId, content, userInfo, answer_recommend, isSelected, createdAt } =
    answerData;

  return (
    <AnswerContanier>
      <div className="post-layout">
        <VoteContainer>
          <ButtonContainer>
            <button>
              <img src={UpVote} alt="Up vote button" />
            </button>
            <div className="recommend">{answer_recommend}</div>
            <button>
              <img src={DownVote} alt="Down vote button" />
            </button>
            <div className="accepted-answer-indicator">
              {isSelected ? (
                <img src={CheckedIcon} alt="CheckedIcon" />
              ) : (
                <img src={CheckIcon} alt="CheckIcon" />
              )}
            </div>
          </ButtonContainer>
        </VoteContainer>
        <AnswerBody>
          <AnswerContent>
            <AnswerViewer content={content} />
          </AnswerContent>
          <EditUserContainer>
            <div className="container">
              <div className="order-button">
                <EditLinkStyled
                  to={`/answeredit`}
                  state={{ qId, aId, content }}
                >
                  Edit
                </EditLinkStyled>
                {/* 나중에 url={url} id={aId}로 써서 answer의 id만 지워질 수 있게 수정 */}
                <Delete />
              </div>
              <UserInfo>
                Answered {createdAt} <br />
                {userInfo}
              </UserInfo>
            </div>
          </EditUserContainer>
        </AnswerBody>
      </div>
    </AnswerContanier>
  );
};

export default AnswerItem;
