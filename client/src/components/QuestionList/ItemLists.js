import Item from "./Item";

const ItemLists = ({ questionData = [] }) => {
  return questionData.map((item) => <Item key={item.qId} questionData={item} />);
};

export default ItemLists;
