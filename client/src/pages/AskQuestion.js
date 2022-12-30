/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import styled from "styled-components";
import backimg from "../img/bckImage.svg";
import { questionCreate } from "../util/questionAPI";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import InputEditor from "../components/InputEditor";

const StyledAskQuestion = styled.div`
  @media screen and (max-width: 1150px) {
    img {
      display: none;
    }
  }
  width: 100%;
  padding: 0 24px 24px 24px;
  background-color: #f8f9f9;
  text-align: left;
  display: flex;
  justify-content: center;
`;
const QuestionForm = styled.div`
  width: 75%;
  height: 100%;
  margin-bottom: 48px;
`;
const QuestionHeader = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const QuestionH1 = styled.h1`
  margin: 24px 0px 27px 0;
  font-size: 27px; /* 2vh */
  color: #232629;
  font-weight: 600;
  line-height: 1.3;
`;

const TitleBox = styled.div`
  height: 160px;
  padding: 24px;
  border: 1px solid #e3e6e8;
  border-radius: 3px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  padding: 5px 2px;
`;
const TitleInput = styled.input`
  width: 100%;
  padding: 0.6em 0.7em;
  border: 1px solid #babfc4;
  border-radius: 3px;
  ::placeholder {
    color: #c9bfc4;
  }

  :focus {
    outline: none !important;
    border-color: #6bbbf7;
    box-shadow: 0 0 0 4px #d3e5f2;
  }
`;

const Desc = styled.div`
  font-size: 14px;
  padding: 0 2px;
  margin: 2px 0 8px 0;
`;

const ProblemBox = styled.div`
  height: 100%;
  padding: 24px;
  border: 1px solid #e3e6e8;
  background-color: #ffffff;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const RegisterBtn = styled.button`
  width: 130px;
  height: 45px;
  padding: 1px 6px;
  margin: 10px 8px 0 0;
  color: #ffffff;
  border: 1px solid #0a95ff;
  background-color: #0a95ff;
  border-radius: 3px;
  :hover {
    background-color: #0074cc;
    cursor: pointer;
  }
`;

const CancleBtn = styled.button`
  width: 97px;
  height: 45px;
  padding: 1px 6px;
  color: #c22e32;
  border: none;
  border-radius: 3px;

  :hover {
    background-color: #fdf2f2;
    cursor: pointer;
  }
`;

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const url = "http://localhost:3001/Question";
  const navigate = useNavigate();

  const fetchAskItem = async () => {
    //title 비었을 때
    if (title === "") {
      alert("제목을 입력하세요");
    }
    //content 비었을 때
    if (content === "") {
      alert("내용을 입력하세요");
    }
  };
  const onCreate = async () => {
    console.log(content);
    await questionCreate(url, title, content);
    // .then((id) => {
    //   console.log(id);
    //   navigate(`/question/${id}`);
    // });
    setTitle("");
    setContent("");
  };

  return (
    <>
      <StyledAskQuestion>
        <QuestionForm>
          <QuestionHeader>
            <QuestionH1>Ask a public question</QuestionH1>
            <img src={backimg} alt="backimg"></img>
          </QuestionHeader>
          <TitleBox>
            <Title>Title</Title>
            <Desc>Be specific and imagine you’re asking a question to another person.</Desc>
            <TitleInput
              type="text"
              placeholder="e.g. Is there an R function for finding the index of element in a vector?"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></TitleInput>
          </TitleBox>
          <ProblemBox>
            <Title>What are the details of your problem?</Title>
            <Desc>
              Introduce the problem and expand on what you put in the title. Minimum 20 characters.
            </Desc>
            <InputEditor setContent={setContent}></InputEditor>
          </ProblemBox>
          <Link to="/">
            <RegisterBtn onClick={onCreate}>Post your question</RegisterBtn>
          </Link>
          <CancleBtn>Discard draft</CancleBtn>
        </QuestionForm>
      </StyledAskQuestion>
      <Footer />
    </>
  );
};

export default AskQuestion;
