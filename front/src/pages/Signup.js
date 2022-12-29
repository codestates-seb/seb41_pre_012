import styled from "styled-components";
import miniLogo from "../img/miniLogo.svg";
import googleImg from "../img/GoogleImg.svg";
import githubImg from "../img/githubImg.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledSignup = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

const SignupBox = styled.div`
  padding: 24px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  .miniLogo {
    margin-bottom: 24px;
  }
`;

const OAuthButtonForm = styled.div`
  margin-bottom: 16px;
`;

const OAuthButton = styled.button`
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3b4045;
  padding: 10px;
  margin: 4px 0 10px 0;
  border: 1px solid #d6d9dc;
  border-radius: 4px;
  background-color: #ffffff;
  img {
    margin-right: 5px;
  }
  :hover {
    background-color: #f8f9f9;
    cursor: pointer;
  }
`;

const OAuthButton2 = styled(OAuthButton)`
  background-color: #2f3337;
  color: #ffffff;
  :hover {
    background-color: #232629;
    cursor: pointer;
  }
`;

const InputForm = styled.div`
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 4px;
  background-color: #ffffff;
  text-align: left;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);
`;

const InputLabel = styled.label`
  padding: 0 2px;
  margin: 2px 0 10px 0;
  font-weight: 600;
`;

const InputBox = styled.input`
  padding: 8px 9px;
  margin-bottom: 13px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  :focus {
    outline: none !important;
    border-color: #6bbbf7;
    box-shadow: 0 0 0 4px #d3e5f2;
  }
`;

const SignupBtn = styled.button`
  padding: 10px;
  margin: 13px 0;
  color: #ffffff;
  background-color: #0a95ff;
  border: 1px solid #0a95ff;
  border-radius: 4px;
  :hover {
    background-color: #0074cc;
    cursor: pointer;
  }
`;
const DesBox = styled.div`
  padding: 16px;
  font-size: 14px;
  text-align: center;
  a {
    padding-left: 3px;
    text-decoration: none;
    color: #0074d4;
  }
`;

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async () => {
    try {
      await axios.post("http://localhost:8080/member", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <StyledSignup>
      <SignupBox>
        <LogoBox>
          <img src={miniLogo} alt="miniLogo" className="miniLogo" />
        </LogoBox>
        <OAuthButtonForm>
          <OAuthButton>
            <img src={googleImg} alt="GoogleImg" />
            Sign up with Google
          </OAuthButton>
          <OAuthButton2>
            <img src={githubImg} alt="githubImg" />
            Sign up with GitHub
          </OAuthButton2>
        </OAuthButtonForm>
        <InputForm>
          <InputLabel>Display name</InputLabel>
          <InputBox type="text" value={username} onChange={usernameHandler} />
          <InputLabel>Email</InputLabel>
          <InputBox type="email" value={email} onChange={emailHandler} />
          <InputLabel>Password</InputLabel>
          <InputBox type="password" value={password} onChange={passwordHandler} />
          <SignupBtn onClick={submitHandler}>Sign up</SignupBtn>
        </InputForm>
        <DesBox>
          Already have an account? <a href="/login">Log in</a>
        </DesBox>
      </SignupBox>
    </StyledSignup>
  );
};

export default Signup;
