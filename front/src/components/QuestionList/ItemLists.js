import Item from "./Item";

const ItemLists = ({ questionData = [] }) => {
  return questionData.map((item) => <Item key={item.id} questionData={item} />);
};

export default ItemLists;
