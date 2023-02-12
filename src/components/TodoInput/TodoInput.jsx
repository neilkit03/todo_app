import React, { useState } from "react";
import "./TodoInput.css";

function TodoInput() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className='form-button' type='submit'>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li className='Input-list' key={index}>
            {todo}
            <button
              className='delete-button'
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoInput;
