import axios from "axios";
const jwtToken = localStorage.getItem("Authorization");
axios.defaults.headers.common["Authorization"] = `${jwtToken}`;

// post는 생성 위해 qid(우리는 지금 id)
export const answerCreate = async (id, content) => {
  try {
    await axios.post(`/answers/${id}`, {
      content: content,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

// patch는 수정위해 aid
export const answerUpdate = async (id, content) => {
  try {
    await axios.patch(`answers/${id}`, {
      content: content,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};
