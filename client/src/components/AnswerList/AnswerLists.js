import AnswerItem from "./AnswerItem";

AnswerItem;
const AnswerLists = ({ questionData, qid }) => {
  return questionData.answer_list.map((item) => (
    <AnswerItem key={item.aid} answerData={item} qId={qid} />
  ));
};

export default AnswerLists;
