import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid #d7d9dc;
`;

const Title = styled.h3`
  display: block;
  font-size: 1.30769231rem;
  font-weight: 400;
  padding-right: 24px;
  line-height: calc((13+4) / 13);
  overflow-wrap: break-word;
  cursor: pointer;
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #2961b9;
  :hover {
    color: #0a95ff;
  }
`;

const UserList = ({ title, qid }) => {
  return (
    <ItemContainer>
      <Title>
        <LinkStyled to={`/question/${qid}`}>{title}</LinkStyled>
      </Title>
    </ItemContainer>
  );
};

export default UserList;
