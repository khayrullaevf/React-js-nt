import React from "react";

const List = (props) => {
  console.log(props.getItems());

  const num = props.getItems();
  return (
    <div>
      {num.map((number, index) => (
        <div key={index}>{number}</div>
      ))}
    </div>
  );
};

export default List;
