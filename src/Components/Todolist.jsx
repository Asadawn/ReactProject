import React from "react";

const Todolist = (props) => {
  return (
    <div className="todo_style">
      <li className="li border-bottom border-secondary border-3">
        <span
          onClick={() => {
            props.onSelect(props.id);
          }}
          className="fa fa-times"
          aria-hidden="true"
        >
          x
        </span>
        {props.text}
      </li>
    </div>
  );
};

export default Todolist;
