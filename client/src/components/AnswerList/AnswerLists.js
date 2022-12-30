import AnswerItem from "./AnswerItem";

AnswerItem;
const AnswerLists = ({ questionData, url, qid }) => {
  return questionData.answer_list.map((item) => (
    <AnswerItem key={item.aid} answerData={item} url={url} qId={qid} />
  ));
};

export default AnswerLists;
