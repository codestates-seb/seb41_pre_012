import axios from "axios";
const jwtToken = localStorage.getItem("Authorization");
axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
const url = "http://ec2-43-201-85-80.ap-northeast-2.compute.amazonaws.com:8080";
import swal from "sweetalert";

// post는 생성 위해 qid(우리는 지금 id)
export const answerCreate = async (qId, content) => {
  try {
    await axios.post(`${url}/answers/${qId}`, {
      content: content,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

// patch는 수정위해 aid
export const answerUpdate = async (aId, content) => {
  try {
    await axios.patch(`${url}/answers/${aId}`, {
      content: content,
    });
    window.location.reload();
  } catch (error) {
    swal("권한이 없습니다.", "본인이 작성하지 않은 글은 수정이 불가능합니다.", "warning");
    console.error("Error", error);
  }
};
