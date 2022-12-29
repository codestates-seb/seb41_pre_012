import AnswerItem from "./AnswerItem";

AnswerItem;
const AnswerLists = ({ questionData, url }) => {
  return questionData.answer_list.map((item) => (
    <AnswerItem key={item.id} answerData={item} url={url} />
  ));
};

export default AnswerLists;
