import styled from "styled-components";
import logo from "../img/Logo.svg";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
// import GitHubIcon from "@mui/icons-material/GitHub";

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  border-top: 3px solid #f48225;
  background-color: #f8f9f9;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  position: fixed;
  top: 0;
  z-index: 5050;
`;
const TopContainer = styled.div`
  display: flex;
  height: 47px;
  width: 79.2307692rem;
  max-width: 100%;
  /* width: 1264px; */
  margin: 0 auto;
  align-items: center;
`;

const HeaderLogo = styled(Link)`
  width: 166px;
  height: 100%;
  padding: 0 8px;
  margin: 0;
  :hover {
    background-color: #e3e6e8;
    cursor: pointer;
  }
  img {
    width: 150px;
    height: 33px;
    margin-top: 4px;
  }
`;

const SearchForm = styled.form`
  padding-left: 8px;
  display: flex;
  align-items: center;
  flex-shrink: 10000;
  flex-grow: 1;
`;
const InputContainer = styled.div`
  height: 33px;
  padding: 0 8px;
  position: relative;
  flex-grow: 1;
  position: relative;
  input {
    width: 100%;
    height: 33px;
    padding: 7px 9px 7px 32px;
    border: 1px solid #d7d9dc;
    border-radius: 3px;
    :focus {
      outline: none !important;
      border-color: #6bbbf7;
      box-shadow: 0 0 0 4px #d3e5f2;
    }
  }
`;

const IconBox = styled.div`
  position: absolute;
  top: 5px;
  left: 13px;
  color: #757575;
`;

const BtnContainer = styled.ul`
  width: 140px;
  height: 47px;
  padding-right: 12px;
  display: flex;
  align-items: center;

  .loginBtn {
    width: 57px;
    align-self: center;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid #7aa7c7;
    background-color: #e1ecf4;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 #ffffff;
    color: #38749e;
    :hover {
      background-color: #b3d3ea;
      cursor: pointer;
    }
  }
  .signupBtn {
    width: 66px;
    align-self: center;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 4px;
    color: #ffffff;
    border: 1px solid #0a95ff;
    background-color: #0a95ff;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 #80c0ff;
    :hover {
      background-color: #0074cc;
      cursor: pointer;
    }
  }
`;

// const GitHubBtn = styled.div`
//   width: 7%;
//   height: 27px;
//   border-radius: 20px;
//   background-color: #2f3337;
//   text-align: center;
//   margin: 0 8px;
//   font-size: 28px;
//   color: #ffffff;
//   :hover {
//     background-color: #232629;
//     cursor: pointer;
//   }
// `;

const Header = () => {
  return (
    <StyledHeader>
      <TopContainer>
        <HeaderLogo to="/">
          <img src={logo} alt="logo" />
        </HeaderLogo>
        <SearchForm>
          <InputContainer>
            <IconBox>
              <SearchIcon />
            </IconBox>
            <input type="text" className="inputBox" placeholder="Search..." />
          </InputContainer>
        </SearchForm>
        <BtnContainer>
          {/* 링크 연결 후 변경하기 */}
          {/* <li button className="loginBtn" onClick={''}>
            Login
          </li>
          <li button className="signupBtn" onClick={''}>
            Sign up
          </li> */}
          {/* 로그인 전 */}
          <Link to="/login">
            <button className="loginBtn"> Log in</button>
          </Link>
          <Link to="/signup">
            <button className="signupBtn"> Sign up</button>
          </Link>
        </BtnContainer>
        {/* <>
          <img src="http://via.placeholder.com/27x27" alt="" />
          <GitHubBtn>
            <GitHubIcon />
          </GitHubBtn>
        </> */}
      </TopContainer>
    </StyledHeader>
  );
};

export default Header;
