import axios from "axios";
const jwtToken = localStorage.getItem("Authorization");
axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
const url = "https://d9ab-218-149-150-223.jp.ngrok.io";

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
    console.error("Error", error);
  }
};
