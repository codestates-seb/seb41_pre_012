import axios from "axios";
const jwtToken = localStorage.getItem("Authorization");
axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
import swal from "sweetalert";

const url = "http://ec2-43-201-85-80.ap-northeast-2.compute.amazonaws.com:8080";

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
