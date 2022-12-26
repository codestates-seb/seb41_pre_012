import styled from "styled-components";
import LeftSidebar from "../components/LetfSidebar";
import Footer from "../components/Footer";
import useravatar from "../img/Rhino.jpeg";
const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  fexl-direction: row;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  margin: 1 auto;
  padding-left: 10px;
  background: #d9d9d9;
`;
const UserBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
`;
const UserImgBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserImg = styled.img`
  width: 128px;
  height: 128px;
`;
const UserNameBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
const UserButton = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`;

const StatsDetailBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
`;
const StatsBox = styled.div`
  width: 35%;
  height: 100%;
`;
const DetailBox = styled.div`
  width: 65%;
  height: 100%;
`;
const QusetionAnswerBox = styled.div`
  width: 100%;
  height: 50%;
  padding: 10px;
`;
const TextBox = styled.div`
  width: 100%;
  height: 15%;
  padding-left: 5px;
  font-size: 25px;
  display: flex;
  align-items: center;
`;
const TextStatBox = styled(TextBox)`
  height: 5%;
`;
const UserDataBox = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 5px;
  background: white;
`;
const UserStatBox = styled(UserDataBox)`
  height: 20%;
`;

const MyPage = () => {
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
                <UserName>User1234</UserName>
                <UserFunction>
                  <UserButton>logout</UserButton> |{" "}
                  <UserButton>edit</UserButton>
                </UserFunction>
              </UserValue>
            </UserNameBox>
          </UserBox>
          <StatsDetailBox>
            <StatsBox>
              <TextStatBox>Stats</TextStatBox>
              <UserStatBox></UserStatBox>
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
};

export default MyPage;
