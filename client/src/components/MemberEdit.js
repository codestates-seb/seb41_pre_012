import { useState } from "react";
import styled from "styled-components";
import { memberUpdate } from "../util/API";

const DeleteStyled = styled.div`
  cursor: pointer;
`;

const ModalContainer = styled.div`
  margin: auto;
  position: relative;
  z-index: 2;
`;
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const ModalView = styled.div.attrs(() => ({
  role: "dialog",
}))`
  opacity: 1;
  transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 230px);
  background-color: #fff;
  border-radius: 7px;
  padding: 24px;
  width: 450px;
  height: 200px;
  box-shadow: 1px 0px 86px -17px rgba(0, 0, 0, 0.75);
  text-align: left;
  .button-container {
    margin-top: 24px;
    display: flex;
  }
`;

const Header = styled.h1`
  color: #2961b9;
  font-size: 2.07692308rem;
  font-weight: normal;
  line-height: calc((13+2) / 13);
  margin-bottom: 30px;
  text-align: center;
`;

const ModalCloseBtn = styled.button`
  background-color: #fff;
  color: #7d858d;
  text-decoration: none;
  border: none;
  border-radius: 3px;
  margin: 4px;
  padding: 10px;
  margin: 10px;
  position: relative;
  left: 37%;
  font-size: 20px;
  text-align: center;
  text-decoration: none;

  :hover {
    background-color: #f8f9f9;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 20px;
  color: #0c0d0e;
  border: 1px solid #e3e6e8;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #babec1;
  }
`;

const MemberEdit = ({ id, username }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [revisedName, setRevisedName] = useState(username);

  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  const onChange = (e) => {
    setRevisedName(e.target.value);
  };
  const onRevise = () => {
    memberUpdate(id, revisedName);
    modalCloseHandler();
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onRevise();
    }
  };
  return (
    <>
      <DeleteStyled onClick={modalOpenHandler}>Edit</DeleteStyled>
      <ModalContainer>
        {isModalOpen && (
          <ModalBackdrop>
            <ModalView>
              <Header>Change Display name</Header>
              <Input
                type="text"
                value={revisedName}
                onChange={onChange}
                onKeyPress={onKeyPress}
              ></Input>
              <ModalCloseBtn onClick={modalCloseHandler}>Cancel</ModalCloseBtn>
            </ModalView>
          </ModalBackdrop>
        )}
      </ModalContainer>
    </>
  );
};

export default MemberEdit;
