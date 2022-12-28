import styled from "styled-components";
import LeftSidebar from "../components/LetfSidebar";
import Footer from "../components/Footer";
import useravatar from "../img/Rhino.jpeg";
import { useParams } from "react-router-dom";
import useFetch from "../util/useFetch";

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
  flex-direction: row;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
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
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const StatsBox = styled.div`
  width: 35%;
  height: 100%;
  margin-left: 20px;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 20%;
    margin-left: 0px;
  }
`;
const DetailBox = styled.div`
  width: 65%;
  height: 100%;
  margin-right: 20px;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80%;
    margin-right: 0px;
  }
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
  @media screen and (max-width: 800px) {
    flex-direction: row;
  }
`;
const TextStatBox = styled(TextBox)`
  height: 50px;
  @media screen and (max-width: 800px) {
    height: 40%;
    margin: 0px;
  }
`;
const UserDataBox = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 5px;
  background: white;
  text-align: center;
  font-size: 15px;
`;
const UserStatBox = styled(UserDataBox)`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
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
  width: 60%;
  text-align: left;
`;

const MyPage = () => {
  const url = "http://localhost:3001/Question";
  const { id } = useParams();
  const { questionData, loading } = useFetch(`${url}/${id}`);

  if (questionData && !loading) {
    const { username } = questionData;
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
                  <UserName>{username}</UserName>
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
                <UserStatBox>
                  <UserStatDetailBox>
                    <UserStatDetailNumberBox>0</UserStatDetailNumberBox>
                    <UserStatDetailNumberBox>answers</UserStatDetailNumberBox>
                  </UserStatDetailBox>
                  <UserStatDetailBox>
                    <UserStatDetailNumberBox>0</UserStatDetailNumberBox>
                    <UserStatDetailNumberBox>questions</UserStatDetailNumberBox>
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
  } else {
    ("Loading...");
  }
};

export default MyPage;
