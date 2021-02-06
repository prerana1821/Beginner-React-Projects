import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { useState } from "react";
import Todos from "./components/Todos";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      imp: 'Least Important',
      done: true,
    },
    {
      id: 2,
      text: "Learn JS",
      imp: 'Important',
      done: true,
    },
    {
      id: 3,
      text: "Make JS Projects",
      imp: 'Necessary',
      done: false,
    },
  ]);

  const handleDone = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    }));
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== id;
    }));
  }

  return (
    <div className='App'>
      <Header />
      <AddTask />
      <Todos listTodos={ todos } handleDone={ handleDone } handleDelete={ handleDelete } />
    </div>
  );
}

export default App;
