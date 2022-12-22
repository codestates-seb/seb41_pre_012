import axios from "axios";
import dayjs from "dayjs";

const nowDate = dayjs(new Date()).format("YYYY-MM-DD");

export const questionCreate = async (url, id, title, content) => {
  try {
    await axios.post(url, {
      id: id,
      title: title,
      content: content,
      createdAt: nowDate,
      modifiedAt: nowDate,
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
      modifiedAt: nowDate,
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
