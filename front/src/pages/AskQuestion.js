/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import styled from "styled-components";
import backimg from "../img/bckImage.svg";
import { questionCreate } from "../util/questionAPI";
import { Link } from "react-router-dom";

const StyledAskQuestion = styled.div`
  padding: 0 24px 24px 24px;
  background-color: #f8f9f9;
  text-align: left;
  display: flex;
  justify-content: center;
`;
const QuestionForm = styled.div`
  width: 1216px;
  height: 1000px;
  margin-bottom: 48px;
`;
const QuestionHeader = styled.div`
  width: 1216px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const QuestionH1 = styled.h1`
  margin: 24px 0px 27px 0;
  font-size: 27px;
  color: #232629;
  font-weight: 600;
  line-height: 1.3;
`;

const TitleBox = styled.div`
  height: 160px;
  padding: 24px;
  border: 1px solid #e3e6e8;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: 600;
  padding: 5px 2px;
`;
const TitleInput = styled.input`
  width: 100%;
  padding: 0.6em 0.7em;
  border: 1px solid #babfc4;
  border-radius: 3px;
  :focus {
    outline: none !important;
    border-color: #6bbbf7;
    box-shadow: 0 0 0 4px #d3e5f2;
  }
`;

const Desc = styled.div`
  font-size: 15px;
  padding: 0 2px;
  margin: 2px 0 8px 0;
`;

const ProblemBox = styled.div`
  height: 425px;
  padding: 24px;
  border: 1px solid #e3e6e8;
  textarea {
    width: 100%;
    height: 200px;
  }
`;
const RegisterBtn = styled.button`
  width: 130px;
  height: 38px;
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
  height: 38px;
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

  // useEffect(() => {
  //   console.log(title, content);
  // }, [title, content]);

  const fetchAskItem = async () => {
    //title 비었을 때
    if (title === "") {
      alert("제목을 입력하세요");
    }
    //content 비었을 때
    if (content === "") {
      alert("내용을 입력하세요");
    }

    // const payload = {
    //   title,
    //   content,
    // };

    // const res = await fetch(``, JSON.stringify(payload)).then((res) =>
    //   res.json()
    // );

    // if (res.result) {
    //   //fetch 성공
    // } else {
    //   //fetch 실패
    // }
  };
  const onCreate = (e) => {
    questionCreate(url, title, content);
    setTitle("");
    setContent("");
  };

  return (
    <StyledAskQuestion>
      <QuestionForm>
        <QuestionHeader>
          <QuestionH1>Ask a public question</QuestionH1>
          <img src={backimg} alt="backimg"></img>
        </QuestionHeader>
        <TitleBox>
          <Title>Title</Title>
          <Desc>
            Be specific and imagine you’re asking a question to another person.
          </Desc>
          <TitleInput
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></TitleInput>
        </TitleBox>
        <ProblemBox>
          <Title>What are the details of your problem?</Title>
          <Desc>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </Desc>
          <textarea
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </ProblemBox>
        <Link to="/">
          <RegisterBtn
            onClick={() => {
              onCreate();
            }}
          >
            Post your question
          </RegisterBtn>
        </Link>
        <CancleBtn>Discard draft</CancleBtn>
      </QuestionForm>
    </StyledAskQuestion>
  );
};

export default AskQuestion;
