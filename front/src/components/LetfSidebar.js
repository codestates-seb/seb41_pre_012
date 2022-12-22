import styled from "styled-components";
// import SearchIcon from '@mui/icons-material/Search';

const StyledLeftSidebar = styled.nav`
  width: 164px;
  height: 358px;
  padding-top: 24px;
  margin-bottom: 8px;
  position: sticky;
  top: 50px;
  left: 0px;
`;
const Navbar = styled.div`
  width: 164px;
  height: 326px;
  color: #525960;
`;
const NavbarTitle = styled.li`
  width: 156px;
  height: 14px;
  font-size: 11px;
  margin: 16px 0 4px 8px;
`;
const NavbarLink = styled.li`
  width: 164px;
  height: 34px;
  font-size: 13px;
  display: flex;
  align-items: center;
  font-weight: bold;
  background-color: #f1f2f3;
  border-right: 3px solid #f48225;
  a {
    width: 164px;
    height: 33px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 6px 8px 8px;
    color: #000000;
  }
`;
const NavbarItemLink = styled.li`
  width: 164px;
  height: 34px;
  font-size: 13px;
  display: flex;
  align-items: center;
  padding: 4px 4px 4px 30px;
  a {
    text-decoration: none;
    color: #525960;
  }
`;

const LeftSidebar = () => {
  return (
    <StyledLeftSidebar>
      <Navbar>
        <ul>
          <NavbarTitle>PUBLIC</NavbarTitle>
          <NavbarLink>
            <a href="/">
              {/* <SearchIcon /> */}
              Questions
            </a>
          </NavbarLink>
          <NavbarItemLink>
            <a href="/">Users</a>
          </NavbarItemLink>
        </ul>
      </Navbar>
    </StyledLeftSidebar>
  );
};

export default LeftSidebar;
