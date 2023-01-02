import axios from "axios";
const jwtToken = localStorage.getItem("Authorization");
axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
import swal from "sweetalert";

const url = "http://ec2-3-38-245-131.ap-northeast-2.compute.amazonaws.com:8080";

// title, content, userInfo(아이디) 만 넘겨줘도 됨 나중에~
export const questionCreate = async (title, content) => {
  try {
    await axios.post(`${url}/questions`, {
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
    swal("권한이 없습니다.", "본인이 작성하지 않은 글은 수정 불가능합니다.", "warning");
    console.error("Error", error);
  }
};

export const questionDelete = async (id) => {
  try {
    await axios.delete(`${url}/questions/${id}`);
    window.location.reload();
  } catch (error) {
    swal("권한이 없습니다.", "본인이 작성하지 않은 글은 삭제 불가능합니다.", "warning");
    console.error("Error", error);
  }
};

export const answerCreate = async (qid, content) => {
  try {
    await axios.post(`${url}/answers/${qid}`, {
      content: content,
    });
  } catch (error) {
    swal("권한이 없습니다.", "로그인을 해주세요!", "warning");
    console.error("Error", error);
  }
};

export const answerUpdate = async (aid, content) => {
  try {
    await axios.patch(`${url}/answers/${aid}`, {
      content: content,
    });
    window.location.reload();
  } catch (error) {
    swal("권한이 없습니다.", "본인이 작성하지 않은 글은 수정이 불가능합니다.", "warning");
    console.error("Error", error);
  }
};

export const answerDelete = async (aid) => {
  try {
    await axios.delete(`${url}/answers/${aid}`);
  } catch (error) {
    swal("권한이 없습니다.", "본인이 작성하지 않은 글은 삭제 불가능합니다.", "warning");
    console.error("Error", error);
  }
};

export const memberDelete = async (mid) => {
  try {
    await axios.delete(`${url}/members/${mid}`);
  } catch (error) {
    console.error("Error", error);
  }
};

export const memberUpdate = async (mid, username) => {
  try {
    await axios.patch(`${url}/members/${mid}`, {
      username: username,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};
