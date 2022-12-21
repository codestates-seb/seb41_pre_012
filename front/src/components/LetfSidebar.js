import styled from "styled-components";

const StyledLeftSidebar = styled.nav`
  width: 164px;
  height: 358px;
  padding-top: 24px;
  flex-shrink: 0;
  position: sticky;
  top: 50px;
  left: 0px;
  background-color: red;
`;

const LeftSidebar = () => {
  return (
    <StyledLeftSidebar>
      PUBLIC <br /> Questions <br /> User
    </StyledLeftSidebar>
  );
};

export default LeftSidebar;
