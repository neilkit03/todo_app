import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoInput />
    </div>
  );
}

export default App;
