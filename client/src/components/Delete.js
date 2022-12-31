import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { questionDelete } from "../util/questionAPI";
import swal from "sweetalert";

const DeleteStyled = styled.div`
  text-decoration: none;
  color: #6a737c;
  margin: 4px;
  cursor: pointer;
  :hover {
    color: #838c95;
  }
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
  height: 173px;
  box-shadow: 1px 0px 86px -17px rgba(0, 0, 0, 0.75);

  .button-container {
    margin-top: 24px;
    display: flex;
  }
`;

const Header = styled.h1`
  color: #c22e32;
  font-size: 2.07692308rem;
  font-weight: normal;
  line-height: calc((13+2) / 13);
  margin-bottom: 16px;
`;
const Text = styled.span`
  color: #3b4045;
  margin-bottom: 24px;
  font-size: 13px;
`;

const DeleteBtn = styled.button`
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 14px;
  background-color: #d0393e;
  margin: 4px;
  padding: 10px;
  display: inline-block;
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  :hover {
    background-color: #c22e32;
    cursor: pointer;
  }
`;
const ModalCloseBtn = styled.button`
  background-color: #fff;
  color: #7d858d;
  text-decoration: none;
  border: none;
  border-radius: 3px;
  margin: 4px;
  padding: 10px;
  position: relative;
  font-size: 14px;
  text-align: center;
  text-decoration: none;

  :hover {
    background-color: #f8f9f9;
    cursor: pointer;
  }
`;

const Delete = ({ url, id }) => {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("Authorization");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpenHandler = () => {
    if (!jwtToken) {
      swal("권한이 없습니다.", "삭제할 권한이 필요합니다.", "warning");
      navigate("/login");
    }
    setIsModalOpen(true);
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
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
              <Header>Discard question</Header>
              <Text>Are you sure you want to discard this question?</Text>
              <div className="button-container">
                <Link to="/">
                  <DeleteBtn onClick={onRemove}>Discard question</DeleteBtn>
                </Link>
                <ModalCloseBtn onClick={modalCloseHandler}>Cancel</ModalCloseBtn>
              </div>
            </ModalView>
          </ModalBackdrop>
        )}
      </ModalContainer>
    </>
  );
};

export default Delete;
