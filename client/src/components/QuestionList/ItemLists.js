import Item from "./Item";

const ItemLists = ({ questionData = [] }) => {
  return questionData.map((item) => <Item key={item.qid} questionData={item} />);
};

export default ItemLists;
