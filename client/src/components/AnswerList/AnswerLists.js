import AnswerItem from "./AnswerItem";

AnswerItem;
const AnswerLists = ({ answerData }) => {
  return answerData.map((item) => <AnswerItem key={item.aid} answerData={item} />);
};

export default AnswerLists;
