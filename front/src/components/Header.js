import styled from "styled-components";
import logo from "../img/Logo.svg";

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  border-top: 3px solid #f48225;
  background-color: #f8f9f9;
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.11);
  position: fixed;
  top: 0;
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
  justify-content: center;
`;

const HeaderLogo = styled.div`
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

const InputContainer = styled.div`
  width: 850px;
  height: 33px;
  padding: 0 8px;

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

const BtnContainer = styled.ul`
  width: 140px;
  height: 47px;
  padding-right: 12px;
  display: flex;
  align-items: center;

  .loginBtn {
    width: 58px;
    height: 35px;
    padding: 8px 10px;
    border: 1px solid #7aa7c7;
    background-color: #e1ecf4;
    border-radius: 3px;
    color: #38749e;
    :hover {
      background-color: #b3d3ea;
      cursor: pointer;
    }
  }
  .signupBtn {
    width: 66px;
    height: 35px;
    padding: 1px 6px;
    margin-left: 4px;
    color: #ffffff;
    border: 1px solid #0a95ff;
    background-color: #0a95ff;
    border-radius: 3px;
    :hover {
      background-color: #0074cc;
      cursor: pointer;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <TopContainer>
        <HeaderLogo>
          <img src={logo} alt="logo" />
        </HeaderLogo>
        <InputContainer>
          <input type="text" className="inputBox" placeholder="Search..." />
        </InputContainer>
        <BtnContainer>
          {/* 링크 연결 후 변경하기 */}
          {/* <li button className="loginBtn" onClick={''}>
            Login
          </li>
          <li button className="signupBtn" onClick={''}>
            Sign up
          </li> */}
          {/* 로그인 전 */}
          <button className="loginBtn"> Login</button>
          <button className="signupBtn"> Sign up</button>
        </BtnContainer>
        {/* <img src="http://via.placeholder.com/25x25" alt="" /> */}
      </TopContainer>
    </StyledHeader>
  );
};

export default Header;
