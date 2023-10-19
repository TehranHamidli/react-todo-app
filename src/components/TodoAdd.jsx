import { useState } from "react";

function TodoAdd({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  function readValue(e) {
    setInputValue(e.target.value);
  }

  function add() {
    onAdd(inputValue);
    setInputValue("");
  }


  return (
    <>
      <div className="todoAdd">
        <input type="text" onChange={readValue} value={inputValue} placeholder="Todo"/>
        <button className="addBtn" onClick={add}>Add</button>
      </div>
    </>
  );
}

export default TodoAdd;
