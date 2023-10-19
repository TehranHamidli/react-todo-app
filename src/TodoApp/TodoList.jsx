function TodoList({ todos, setTodos }) {
  function deleteTodo(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <>
      <div className="todoList">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {index + 1}. {todo}
              <button className="deleteBtn" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TodoList;
