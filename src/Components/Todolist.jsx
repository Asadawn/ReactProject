import React from "react";

const Todolist = (props) => {
  return (
    <div className="todo_style">
      <li className="li border-bottom border-secondary border-3">
        <div
          onClick={() => {
            props.onSelect(props.id);
          }}
          className="fa fa-times"
          aria-hidden="true"
        >
          x
        </div>
        {props.text}
      </li>
    </div>
  );
};

export default Todolist;
