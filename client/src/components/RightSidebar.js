import styled from "styled-components";

const StyledRightSidebar = styled.div`
  @media screen and (max-width: 980px) {
    display: none;
  }
  width: 300px;
  height: 100%;
  margin: 0 0 15px 24px;
  float: right;
  background-color: pink;
`;
const RightSidebar = () => {
  return <StyledRightSidebar>RightSidebar</StyledRightSidebar>;
};

export default RightSidebar;
