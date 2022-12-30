import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledRightSidebar = styled.div`
  @media screen and (max-width: 980px) {
    display: none;
  }
  width: 200px;
  height: 100%;
  margin: 0 0 15px 24px;
  float: right;
  border: 1px solid #f1e5bc;
  border-radius: 3px;
  background-color: #fdf7e2;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;
const SidebarWidget = styled.ul``;

const Header = styled.li`
  font-weight: bold;
  padding: 12px 15px;
  background-color: #fbf3d5;
  border-bottom: 1px solid #f1e5bc;
  color: #525960;
`;

const Item = styled.li`
  margin: 12px 0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: #3b4045;
  :hover {
    color: #525960;
  }
  .icon {
    margin-right: 6px;
  }
`;

const RightSidebar = () => {
  return (
    <StyledRightSidebar>
      <SidebarWidget>
        <Header>The Adventurer</Header>
        <Item>
          <GitHubIcon className="icon" />
          LEEKH109 🐻‍❄️
        </Item>
        <Item>
          <GitHubIcon className="icon" /> hie6953 🐼
        </Item>
        <Item>
          <GitHubIcon className="icon" /> yejin32 🐰
        </Item>
        <Item>
          <GitHubIcon className="icon" /> lhj920514 🐳
        </Item>
        <Item>
          <GitHubIcon className="icon" /> euijin0122 🦭
        </Item>
        <Item>
          <GitHubIcon className="icon" /> rhino-ty 🦏
        </Item>
      </SidebarWidget>
    </StyledRightSidebar>
  );
};

export default RightSidebar;
