import styled from "styled-components";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import RightSidebar from "../components/RightSidebar";
import ItemLists from "../components/QuestionList/ItemLists";
import useFetch from "../util/useFetch";

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const StyledSection = styled.section`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
  height: 1080px;
  border-left: 1px solid #d7d9dc;
  display: flex;
  justify-content: space-between;
`;

const MainSection = styled.div`
  width: calc(100% - 324px);
  /* max-width: 728px; */
`;

const Questions = styled.div`
  width: auto;
  margin-bottom: 20px;
`;

const Domain = () => {
  const url = "http://localhost:3001/Question";
  const { questionData, loading } = useFetch(url);
  return (
    <>
      <Container>
        <LeftSidebar />
        <StyledSection>
          <MainSection>
            All Questions
            <Questions>{!loading && questionData ? <ItemLists questionData={questionData} /> : "Loading..."}</Questions>
          </MainSection>
          <RightSidebar />
        </StyledSection>
      </Container>
      <Footer />
    </>
  );
};

export default Domain;
