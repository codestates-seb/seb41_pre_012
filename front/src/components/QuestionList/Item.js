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
`;
const Votes = styled.div`
  display: inline-flex;
  gap: 0.3em;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
`;
const Answers = styled.div`
  display: inline-flex;
  gap: 0.3em;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  color: #6a737d;
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
  text-decoration: none;
  color: #2961b9;
`;
const Content = styled.div`
  font-size: 14px;
  color: #6a737d;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word !important;
  overflow-wrap: break-word !important;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: #6a737d;
`;

const Item = ({ questionData }) => {
  const { title, content, createdAt, view, question_recommend, username } = questionData;

  return (
    <ItemContainer>
      <VotesAnswersViews>
        <Votes>{question_recommend} votes</Votes>
        <Answers> answers</Answers>
        <Views>{view} views</Views>
      </VotesAnswersViews>
      <TitleContentUser>
        <Title>
          <Link to="/question">{title}</Link>
        </Title>
        <Content>{content}</Content>
        <User>
          {username}, {createdAt}
        </User>
      </TitleContentUser>
    </ItemContainer>
  );
};

export default Item;
