import AnswerItem from "./AnswerItem";

AnswerItem;
const AnswerLists = ({ answerData, id }) => {
  return answerData.map((item) => <AnswerItem key={item.aid} answerData={item} qid={id} />);
};

export default AnswerLists;
