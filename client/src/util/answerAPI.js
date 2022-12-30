import axios from "axios";
import dayjs from "dayjs";

const nowDate = dayjs(new Date()).format("YYYY-MM-DD");
const nowDateId = dayjs(new Date()).format("YYYYMMDDssmsms");

// TODO: question id를 그대로 받아주고, Question에서 했던 것처럼 버튼 누를 시 요청이 가게 모양만 잡아주기
export const answerCreate = async (url, id, content) => {
  try {
    await axios.post(`${url}/${id}`, {
      aid: nowDateId,
      userInfo: "윤뿔소",
      content: content,
      answer_recommend: 0,
      isSelected: false,
      createdAt: nowDate,
      modifiedAt: nowDate,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error", error);
  }
};

// Read는 useFetch로

export const answerUpdate = async (url, id, content) => {
  try {
    await axios.patch(`${url}/${id}`, {
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
