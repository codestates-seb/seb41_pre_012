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
  background: gray;
`;
const UserBox = styled.div`
  background: red;
  width: 100%;
  height: 20%;
  display: flex;
`;
const UserImgBox = styled.div`
  width: 20%;
  height: 100%;
  background: green;
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
  background: purple;
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

const StatsDetailBox = styled.div`
  background: blue;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
`;
const StatsBox = styled.div`
  width: 35%;
  height: 100%;
  border: 1px solid black;
`;
const DetailBox = styled.div`
  width: 65%;
  height: 100%;
  border: 1px solid black;
`;
const QusetionAnswerBox = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid black;
`;
const TextBox = styled.div`
  width: 100%;
  height: 20%;
  background: gray;
`;
const TextStatBox = styled(TextBox)`
  height: 10%;
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
                <UserFunction>logout | edit</UserFunction>
              </UserValue>
            </UserNameBox>
          </UserBox>
          <StatsDetailBox>
            <StatsBox>
              <TextStatBox></TextStatBox>
            </StatsBox>
            <DetailBox>
              <QusetionAnswerBox>
                <TextBox></TextBox>
              </QusetionAnswerBox>
              <QusetionAnswerBox>
                <TextBox></TextBox>
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
