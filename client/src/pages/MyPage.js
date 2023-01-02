import styled from "styled-components";
import useravatar from "../img/Rhino.jpeg";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import FaceRetouchingOffIcon from "@mui/icons-material/FaceRetouchingOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useFetch from "../util/useFetch";
import { Footer, UserList, MemberDelete, MemberEdit, LeftSidebar } from "../components/index";

const Page = styled.div`
  width: 100%;
  max-width: 1264px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: solid #d6d9dc;
  border-left-width: 1px;
  border-top-width: 0;
  border-bottom-width: 0;
  border-right-width: 0;
`;
const UserBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
const UserImgBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserImg = styled.img`
  width: 128px;
  height: 128px;
  margin: 8px;
  border-radius: 5px;
  @media screen and (max-width: 1150px) {
    width: 96px;
    height: 96px;
  }
  @media screen and (max-width: 800px) {
    width: 64px;
    height: 64px;
  }
`;
const UserNameBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const UserValue = styled.div`
  width: 100%;
`;
const UserName = styled.p`
  font-size: 32px;
  margin-bottom: 5px;
`;
const UserFunction = styled.div`
  font-size: 20px;
  margin-top: 8px;
  display: flex;
  margin-left: -10px;
  align-items: center;
  .middle {
    border-left: 1px solid #6a737c;
    border-right: 1px solid #6a737c;
  }
  .delete-button {
    :hover {
      color: #d0393e;
    }
  }
`;
const UserButton = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  color: #6a737c;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 0 5px;
  :hover {
    color: #838c95;
  }
  .icon {
    font-size: 18px;
    margin-left: 6px;
  }
`;

const StatsDetailBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const StatsBox = styled.div`
  width: 25%;
  height: 200px;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 20%;
  }
`;
const DetailBox = styled.div`
  width: 80%;
  height: 100%;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80%;
  }
`;
const QusetionAnswerBox = styled.div`
  width: 100%;
  height: 50%;
`;
const TextBox = styled.div`
  width: 100%;
  height: 10%;
  padding-left: 5px;
  margin-bottom: 5px;
  font-size: 25px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: row;
  }
`;
const TextStatBox = styled.div`
  height: 10%;
  padding-left: 5px;
  margin-bottom: 10px;
  font-size: 25px;
  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
`;
const UserDataBox = styled.div`
  width: 100%;
  height: 80%;
  min-height: 200px;
  border-radius: 5px;
  background: #fff;
  text-align: center;
  font-size: 15px;
  border: 1px solid #d7dadd;
  margin-bottom: 10px;
`;
const UserStatBox = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d7dadd;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;
const UserStatDetailBox = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
`;
const UserStatDetailNumberBox = styled.div`
  width: 90%;
  text-align: left;
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 3px;
`;
const UserStatDetailTextBox = styled(UserStatDetailNumberBox)`
  font-size: 15px;
  color: #8a9096;
`;

const MyPage = () => {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("Authorization");
  axios.defaults.headers.common["Authorization"] = `${jwtToken}`;

  const deleteToken = () => {
    localStorage.removeItem("Authorization");
    navigate("/");
    window.location.reload();
  };

  const { questionData: userData, loading } = useFetch("members");

  if (!loading && userData) {
    const { mid, questionCount, answerCount, questionList, answerList, userInfo } = userData;

    return (
      <>
        <Page>
          <LeftSidebar />
          <Container>
            <UserBox>
              <UserImgBox>
                <UserImg src={useravatar} alt="useravatar" />
              </UserImgBox>
              <UserNameBox>
                <UserValue>
                  <UserName>{userInfo}</UserName>
                  <UserFunction>
                    <UserButton onClick={deleteToken}>
                      Log out <LogoutIcon className="icon" />
                    </UserButton>
                    <div className="middle">
                      <UserButton>
                        <MemberEdit id={mid} username={userInfo} />
                        <PersonRemoveIcon className="icon" />
                      </UserButton>
                    </div>
                    <UserButton className="delete-button">
                      <MemberDelete id={mid} />
                      <FaceRetouchingOffIcon className="icon" />
                    </UserButton>
                  </UserFunction>
                </UserValue>
              </UserNameBox>
            </UserBox>
            <StatsDetailBox>
              <StatsBox>
                <TextStatBox>Stats</TextStatBox>
                <UserStatBox>
                  <UserStatDetailBox>
                    <UserStatDetailNumberBox>{answerCount}</UserStatDetailNumberBox>
                    <UserStatDetailTextBox>answers</UserStatDetailTextBox>
                  </UserStatDetailBox>
                  <UserStatDetailBox>
                    <UserStatDetailNumberBox>{questionCount}</UserStatDetailNumberBox>
                    <UserStatDetailTextBox>questions</UserStatDetailTextBox>
                  </UserStatDetailBox>
                </UserStatBox>
              </StatsBox>
              <DetailBox>
                <QusetionAnswerBox>
                  <TextBox>Answers</TextBox>
                  <UserDataBox>
                    {answerList.map((item) => (
                      <UserList key={item.qid} title={item.title} qid={item.qid} />
                    ))}
                  </UserDataBox>
                </QusetionAnswerBox>
                <QusetionAnswerBox>
                  <TextBox>Questions</TextBox>
                  <UserDataBox>
                    {questionList.map((item) => (
                      <UserList key={item.qid} title={item.title} qid={item.qid} />
                    ))}
                  </UserDataBox>
                </QusetionAnswerBox>
              </DetailBox>
            </StatsDetailBox>
          </Container>
        </Page>
        <Footer />
      </>
    );
  } else {
    return "";
  }
};

export default MyPage;
