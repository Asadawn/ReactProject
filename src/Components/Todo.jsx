import React, { useState } from "react";
import ".//todo.css";
import Todolist from "./Todolist";

const Todo = () => {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);

  const listOfItems = () => {
    if (inputlist === "") {
      alert("Enter a value");
    } else {
      setItems((olditems) => {
        return [...olditems, inputlist];
      });
      setInputlist("");
    }
  };
  const deleteItem = (id) => {
    console.log("delete");
    setItems((olditems) => {
      return olditems.filter((arrEl, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div ">
        <div className="center_div mt-5">
          <div className="">
            <br />
            <h1 className="h1">TODO List</h1>
            <br />
            <input
              value={inputlist}
              className="border-bottom border-secondary border-3"
              placeholder="Add Todo..."
              onChange={(e) => setInputlist(e.target.value)}
              style={{ marginLeft: "35px" }}
            />
            <button className="button" onClick={listOfItems}>
              +
            </button>
            <ol className="ol">
              {items.map((e, index) => {
                return (
                  <Todolist
                    key={index}
                    id={index}
                    text={e}
                    onSelect={deleteItem}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
