import styled from "styled-components";
import LeftSidebar from "../components/LetfSidebar";
import Footer from "../components/Footer";
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
`;
const UserNameBox = styled.div`
  width: 80%;
  height: 100%;
  background: purple;
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
            <UserImgBox></UserImgBox>
            <UserNameBox></UserNameBox>
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
