import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #d7d9dc;
`;

const VotesAnswersViews = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 108px;
  height: 100%;
  margin-right: 16px;
  margin-bottom: 4px;
  font-size: 13px;
  gap: 6px;
`;
const Votes = styled.div`
  display: inline-flex;
  gap: 0.3em;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
`;
const Answer = styled.div`
  display: inline-flex;
  gap: 0.3em;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  color: #6a737d;
`;
const Answers = styled.div`
  display: inline-flex;
  gap: 0.3em;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid #2f6f44;
  color: #2f6f44;
  border-radius: 3px;
  padding: 3px 5px;
  span {
    font-size: 14px;
    font-weight: 500;
  }
`;
const Views = styled.div`
  display: inline-flex;
  gap: 0.3em;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  color: #6a737d;
`;

const TitleContentUser = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 100%;
`;
const Title = styled.h3`
  display: block;
  font-size: 1.30769231rem;
  font-weight: 400;
  padding-right: 24px;
  line-height: calc((13+4) / 13);
  overflow-wrap: break-word;
  margin: 0 0 1em;
  cursor: pointer;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #2961b9;
  :hover {
    color: #0a95ff;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: #6a737d;
`;

const Item = ({ questionData }) => {
  const {
    qId: id,
    title,
    createdAt,
    view,
    question_recommend,
    userInfo,
    answer_list,
  } = questionData;

  return (
    <ItemContainer>
      <VotesAnswersViews>
        <Votes>{question_recommend} votes</Votes>
        {answer_list.length ? (
          <Answers>
            <span>{answer_list}</span> answers
          </Answers>
        ) : (
          <Answer>{answer_list} answers</Answer>
        )}

        <Views>{view} views</Views>
      </VotesAnswersViews>
      <TitleContentUser>
        <Title>
          <LinkStyled to={`/question/${id}`}>{title}</LinkStyled>
        </Title>

        <User>
          {userInfo}, {createdAt}
        </User>
      </TitleContentUser>
    </ItemContainer>
  );
};

export default Item;
