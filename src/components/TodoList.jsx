import React, { useState } from 'react';

function TodoList({ todos, setTodos }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  function deleteTodo(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  function editBtn(index) {
    setEditIndex(index);
    setEditText(todos[index]);
  }

  function saveEdit(index) {
    const updatedTodos = [...todos];
    updatedTodos[index] = editText;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText('');
  }

  return (
    <>
      <div className="todoList">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {index + 1}. {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button className="saveBtn" onClick={() => saveEdit(index)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  {todo}
                  <div>
                    <button className="deleteBtn" onClick={() => deleteTodo(index)}>
                      Delete
                    </button>
                    <button className="editBtn" onClick={() => editBtn(index)}>
                      Edit
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
