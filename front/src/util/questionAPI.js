import axios from "axios";
import dayjs from "dayjs";

const nowDate = dayjs(new Date()).format("YYYY-MM-DD");
const nowDateId = dayjs(new Date()).format("YYYYMMDDssmsms");

export const questionCreate = async (url, title, content) => {
  try {
    await axios.post(url, {
      id: nowDateId,
      title: title,
      content: content,
      createdAt: nowDate,
      modifiedAt: nowDate,
      view: 0,
      question_recommend: 0,
      username: "윤뿔소",
      answer_list: [],
    });
    // .then((response) => {
    //   return response.data.id;
    // });
    window.location.reload();
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
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

export const questionDelete = async (url, id) => {
  try {
    await axios.delete(`${url}/${id}`);
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};
