import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useFetch from "../util/useFetch";
import { ItemLists, LeftSidebar, Footer, RightSidebar } from "../components/index";

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const StyledSection = styled.section`
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  min-height: 1200px;
  height: 100%;
  border-left: 1px solid #d7d9dc;
  display: flex;
  justify-content: space-between;
`;

const MainSection = styled.div`
  width: 100%;
`;

const Questions = styled.div`
  width: auto;
  margin-bottom: 20px;
  margin-left: -24px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 24px;
`;
const AllQuestions = styled.div`
  font-size: 30px;
`;
const AskQuestion = styled.div`
  font-size: 14px;
  width: 103px;
  height: 38px;
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  position: relative;
  right: 0;
  box-shadow: inset 0 1.5px 0 0 #80c0ff;
  background-color: #0995ff;
  color: white;
  &:hover {
    background-color: #0a5dc1;
    color: white;
    cursor: pointer;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding-bottom: 10px;
  word-break: break-all;
  margin-left: 24px;
`;

const SortButtonContainer = styled.div`
  border: 0.5px solid #838c95;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
`;
const SortButtonLeft = styled.button`
  border: 0;
  border-right: 0.5px solid #838c95;
  border-radius: 3px 0 0 3px;
  height: 34px;
  background-color: white;
  outline: 0;
  color: #6a737d;
  &:hover {
    background-color: #d9d9d9;
    cursor: pointer;
  }
`;
const SortButton = styled.button`
  border: 0;
  border-radius: 0 3px 3px 0;
  height: 34px;
  background-color: white;
  outline: 0;
  color: #6a737d;
  &:hover {
    background-color: #d9d9d9;
    cursor: pointer;
  }
`;

const HeadlineContainer = styled.div`
  border-bottom: 1px solid #d7d9dc;
  margin-left: -24px;
`;

const LinkStyled = styled.button`
  border: 0;
  background-color: #fff;
  text-decoration: none;
  color: #fff;
`;

const Domain = () => {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("Authorization");
  const nextLevel = () => {
    if (jwtToken) {
      navigate("/ask");
    } else {
      swal("권한이 없습니다.", "로그인을 해주셔야 합니다.", "warning");
      navigate("/login");
    }
  };

  const { questionData, loading } = useFetch("questions");

  return (
    <>
      <Container>
        <LeftSidebar />
        <StyledSection>
          <MainSection>
            <HeadlineContainer>
              <TopContainer>
                <AllQuestions>All Questions</AllQuestions>
                <LinkStyled onClick={nextLevel}>
                  <AskQuestion>Ask Question</AskQuestion>
                </LinkStyled>
              </TopContainer>
              <ButtonContainer>
                <div>{!loading && questionData ? questionData.length : "Loading..."} questions</div>
                <SortButtonContainer>
                  <SortButtonLeft>Newest</SortButtonLeft>
                  <SortButton>Unanswered</SortButton>
                </SortButtonContainer>
              </ButtonContainer>
            </HeadlineContainer>
            <Questions>
              {!loading && questionData ? <ItemLists questionData={questionData} /> : "Loading..."}
            </Questions>
          </MainSection>
          <RightSidebar />
        </StyledSection>
      </Container>
      <Footer />
    </>
  );
};

export default Domain;
