import axios from "axios";

export const questionCreate = async (url, id, title, content, createdAt, modifiedAt) => {
  try {
    await axios.post(url, {
      id: id,
      title: title,
      content: content,
      createdAt: createdAt,
      modifiedAt: modifiedAt,
      view: 0,
      question_recommend: 0,
      username: "윤뿔소",
      answer_list: [],
    });
  } catch (error) {
    console.error("Error", error);
  }
};

// Read는 useFetch로

export const questionUpdate = async (url, id, title, content) => {
  try {
    await axios.patch(`${url}/${id}`, {
      title: title,
      content: content,
    });
  } catch (error) {
    console.error("Error", error);
  }
};

export const questionDelete = async (url, id) => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.error("Error", error);
  }
};
