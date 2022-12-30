import styled from "styled-components";
import LeftSidebar from "../components/LetfSidebar";
import Footer from "../components/Footer";
import useravatar from "../img/Rhino.jpeg";
// import { useParams } from "react-router-dom";
// import useFetch from "../util/useFetch";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

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
  height: 1080px;
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
const UserFunction = styled.p`
  font-size: 20px;
  margin-top: 5px;
  margin: 8px;
`;
const UserButton = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 3px;
  overflow: visible;
  color: #6a737c;
  cursor: pointer;
  .icon {
    font-size: 13px;
    padding-top: 3px;
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
  height: 100%;
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
  font-size: 25px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: row;
  }
`;
const TextStatBox = styled(TextBox)`
  height: 5%;
  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
`;
const UserDataBox = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 5px;
  background: #f8f9f9;
  text-align: center;
  font-size: 15px;
  border: 1px solid #d7dadd;
`;
const UserStatBox = styled(UserDataBox)`
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 30%;
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
  // const url = "http://localhost:3001/Question";
  // const { id } = useParams();
  // const { questionData, loading } = useFetch(`${url}/${id}`);

  // if (questionData && !loading) {
  //   const { userInfo } = questionData;
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
                <UserName>윤뿔소</UserName>
                <UserFunction>
                  <UserButton>
                    log out <LogoutIcon className="icon" />
                  </UserButton>
                  <UserButton>
                    | edit <PersonRemoveIcon className="icon" />
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
                  <UserStatDetailNumberBox>0</UserStatDetailNumberBox>
                  <UserStatDetailTextBox>answers</UserStatDetailTextBox>
                </UserStatDetailBox>
                <UserStatDetailBox>
                  <UserStatDetailNumberBox>0</UserStatDetailNumberBox>
                  <UserStatDetailTextBox>questions</UserStatDetailTextBox>
                </UserStatDetailBox>
              </UserStatBox>
            </StatsBox>
            <DetailBox>
              <QusetionAnswerBox>
                <TextBox>Answers</TextBox>
                <UserDataBox></UserDataBox>
              </QusetionAnswerBox>
              <QusetionAnswerBox>
                <TextBox>Questions</TextBox>
                <UserDataBox></UserDataBox>
              </QusetionAnswerBox>
            </DetailBox>
          </StatsDetailBox>
        </Container>
      </Page>
      <Footer />
    </>
  );
  // } else {
  //   ("Loading...");
  // }
};

export default MyPage;
