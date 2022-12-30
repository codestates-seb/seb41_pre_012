import axios from "axios";

// post는 생성 위해 qid(우리는 지금 id)
export const answerCreate = async (id, content) => {
  try {
    await axios.post(`/answer/${id}`, {
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

export const questionDelete = async (id) => {
  try {
    await axios.delete(`/questions/${id}`);
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};
