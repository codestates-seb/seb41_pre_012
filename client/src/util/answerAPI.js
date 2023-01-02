import axios from "axios";
const jwtToken = localStorage.getItem("Authorization");
axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
const url = "http://ec2-3-38-245-131.ap-northeast-2.compute.amazonaws.com:8080";
import swal from "sweetalert";

// post는 생성 위해 qid(우리는 지금 id)
export const answerCreate = async (qid, content) => {
  try {
    await axios.post(`${url}/answers/${qid}`, {
      content: content,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

// patch는 수정위해 aid
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
