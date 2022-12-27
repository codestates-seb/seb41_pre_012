import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 320px;
  background-color: #25262a;
  bottom: 0;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    height: 480px;
  }
`;
const FooterLogoContainer = styled.div`
  margin: 10px 20px 10px 120px;
`;
const FooterLogo = styled.img`
  width: 37px;
  height: 32px;
`;
const FooterContentsContainer = styled.div`
  width: 100%;
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const FooterListCarrier = styled.div`
  flex-direction: column;
  margin-right: 6%;
`;
const FooterListTitle = styled.h5`
  color: #b8bdc2;
  margin-bottom: 5%;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
const FooterUl = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    flex-direction: row;
    margin-bottom: 5%;
  }
`;
const FooterList = styled.li`
  padding: 5px 0 5px 0;
  font-size: 15px;
  color: #848b92;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    font-size: 8px;
    padding: 0px;
    margin: 2px;
  }
`;
const SideFooter = styled.div`
  width: 30%;
`;
const SideFooterContents = styled.div`
  display: flex;
`;
const SideFooterLink = styled.div`
  margin-right: 1%;
  margin-left: 1%;
  color: #b8bdc2;
  font-size: 13px;
`;
const SideCopyright = styled.div`
  margin-top: 210px;
  margin-left: 1%;
  color: #b8bdc2;
  font-size: 13px;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    margin-top: 10px;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogoContainer>
        <FooterLogo src="https://cdn.icon-icons.com/icons2/836/PNG/512/Stack_Overflow_icon-icons.com_66761.png" />
      </FooterLogoContainer>
      <FooterContentsContainer>
        <FooterListCarrier>
          <FooterListTitle>STACK OVERFLOW</FooterListTitle>
          <FooterUl>
            <FooterList>Questions</FooterList>
            <FooterList>Help</FooterList>
          </FooterUl>
        </FooterListCarrier>
        <FooterListCarrier>
          <FooterListTitle>PRODUCTS</FooterListTitle>
          <FooterUl>
            <FooterList>Teams</FooterList>
            <FooterList>Advertising</FooterList>
            <FooterList>Collectives</FooterList>
            <FooterList>Talent</FooterList>
          </FooterUl>
        </FooterListCarrier>
        <FooterListCarrier>
          <FooterListTitle>COMPANY</FooterListTitle>
          <FooterUl>
            <FooterList>About</FooterList>
            <FooterList>Press</FooterList>
            <FooterList>Work Here</FooterList>
            <FooterList>Legal</FooterList>
            <FooterList>Privacy Policy</FooterList>
            <FooterList>Terms of Service</FooterList>
            <FooterList>Contact Us</FooterList>
            <FooterList>Cookie Settings</FooterList>
            <FooterList>Cookie Policy</FooterList>
          </FooterUl>
        </FooterListCarrier>
        <FooterListCarrier>
          <FooterListTitle>STACK EXCHANGE NETWORK</FooterListTitle>
          <FooterUl>
            <FooterList>Technology</FooterList>
            <FooterList>Culture & recreation</FooterList>
            <FooterList>Life & arts</FooterList>
            <FooterList>Science</FooterList>
            <FooterList>Professional</FooterList>
            <FooterList>Business</FooterList>
            <FooterList></FooterList>
            <FooterList>API</FooterList>
            <FooterList>Data</FooterList>
          </FooterUl>
        </FooterListCarrier>
        <SideFooter>
          <SideFooterContents>
            <SideFooterLink>Blog</SideFooterLink>
            <SideFooterLink>Facebook</SideFooterLink>
            <SideFooterLink>Twitter</SideFooterLink>
            <SideFooterLink>Linkedin</SideFooterLink>
            <SideFooterLink>Instagram</SideFooterLink>
          </SideFooterContents>
          <SideCopyright>
            Site design / logo © 2022 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. <br />
            rev 2022.12.19.43125
          </SideCopyright>
        </SideFooter>
      </FooterContentsContainer>
    </StyledFooter>
  );
};

export default Footer;
