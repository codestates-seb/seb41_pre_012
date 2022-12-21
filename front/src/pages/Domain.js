import styled from "styled-components";
import Footer from "../components/Footer";
import LeftSidebar from "../components/LetfSidebar";
import RightSidebar from "../components/RightSidebar";

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
`;

const Domain = () => {
  return (
    <>
      <Container>
        <LeftSidebar />
        <StyledSection>
          All Questions
          <RightSidebar />
        </StyledSection>
      </Container>
      <Footer />
    </>
  );
};

export default Domain;
