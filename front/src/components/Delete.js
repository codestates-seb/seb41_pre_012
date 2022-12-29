import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { questionDelete } from "../util/questionAPI";

const DeleteStyled = styled.div`
  text-decoration: none;
  color: #6a737c;
  margin: 4px;
  cursor: pointer;
`;

const Text = styled.span`
  color: #f48024;
  font-size: 1.30769231rem;
  position: absolute;
  top: 30%;
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
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 185px);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 150px;
`;
const DeleteBtn = styled.button`
  background-color: #fff;
  color: #ff2c29;
  text-decoration: none;
  border: none;
  position: absolute;
  left: 30%;
  bottom: 20%;
  cursor: pointer;
  font-size: 20px;
`;
const ModalCloseBtn = styled.button`
  background-color: #fff;
  color: #000;
  text-decoration: none;
  border: none;
  position: absolute;
  bottom: 20%;
  right: 30%;
  cursor: pointer;
  font-size: 20px;
`;

const Delete = ({ url, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      questionDelete(url, id);
    }
  };
  const onRemove = () => {
    questionDelete(url, id);
  };

  return (
    <>
      <DeleteStyled onClick={modalOpenHandler}>Delete</DeleteStyled>
      <ModalContainer>
        {isModalOpen && (
          <ModalBackdrop>
            <ModalView>
              <Text>Are you sure you want to delete the post?</Text>
              <Link to="/">
                <DeleteBtn onClick={onRemove} onKeyPress={onKeyPress}>
                  Delete!
                </DeleteBtn>
              </Link>
              <ModalCloseBtn onClick={modalCloseHandler}>Nope!</ModalCloseBtn>
            </ModalView>
          </ModalBackdrop>
        )}
      </ModalContainer>
    </>
  );
};

export default Delete;
