import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  border-top: 3px solid #f48225;
  background-color: #f8f9f9;
  box-shadow: 0px 5px 3px 1px rgba(0, 0, 0, 0.31);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
const Header = () => {
  return <StyledHeader></StyledHeader>;
};

export default Header;
