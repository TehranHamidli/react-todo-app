import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos,setTodos] = useState([])


  const addTodo = (newTodo) => {
    if (newTodo.trim() !== "") { 
      setTodos([...todos, newTodo]);
    }
  }

  return (
    <>
      <div className="todoApp">
          <TodoAdd onAdd={addTodo} />
          <TodoList  todos={todos} setTodos={setTodos}/>

        </div>
  
    </>
  );
}

export default TodoApp;
