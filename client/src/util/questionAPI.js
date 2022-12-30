import axios from "axios";

export const questionRead = async () => {
  try {
    const response = await axios.get("/questions?page=1&size=15");
    console.log(response.data);
    // window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

export const questionDetail = async (id) => {
  try {
    const response = await axios.get(`/questions/${id}`);
    console.log(response.data);
    // window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

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
    await axios.patch(`/questions/${qid}`, {
      title: title,
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
