import axios from "axios";
const jwtToken = localStorage.getItem("Authorization");
axios.defaults.headers.common["Authorization"] = `${jwtToken}`;

const url = "https://d9ab-218-149-150-223.jp.ngrok.io";

// title, content, userInfo(아이디) 만 넘겨줘도 됨 나중에~
export const questionCreate = async (title, content) => {
  try {
    await axios.post("/questions", {
      title: title,
      content: content,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

export const questionUpdate = async (qid, title, content) => {
  try {
    await axios.patch(`${url}/questions/${qid}`, {
      title: title,
      content: content,
    });
    window.location.reload();
  } catch (error) {
    alert("본인이 쓰지않는 글은 수정 불가잉~");
    console.error("Error", error);
  }
};

export const questionDelete = async (id) => {
  try {
    await axios.delete(`${url}/questions/${id}`);
    window.location.reload();
  } catch (error) {
    alert("본인이 쓰지않는 글은 삭제 불가잉~");
    console.error("Error", error);
  }
};
