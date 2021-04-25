import React from "react";

const List = (props) => {
  return (
    <>
      <div className="todo_style">
        <p
          className="cross"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          ❌
        </p>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default List;
