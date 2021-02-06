import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { useState } from "react";
import Todos from "./components/Todos";
import Filters from "./components/Filters";

function App() {

  const [active, setActive] = useState(false);
  const [status, setStatus] = useState('All')

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

  let num = 4;
  const handleAddTask = (todo) => {
    const id = num++;
    console.log(todo);
    const newTodo = { id, ...todo }
    setTodos([...todos, newTodo]);
  }

  const filters = (value) => {
    console.log(value);
    switch (value) {
      case value === 'Completed':
        setTodos(todos.filter(todo => todo.done));
        break;
      case value === 'Uncompleted':
        setTodos(todos.filter(todo => !todo.done));
        break;
      default:
        setTodos(todos);
        break;
    }
  };

  // const handleAll = () => {
  //   setTodos(todos.map((todo) => {
  //     return todo;
  //   }));
  // }

  // const handleCompleted = () => {
  //   setTodos(todos.filter((todo) => {
  //     return todo.done;
  //   }));
  // }

  // const handleUnCompleted = () => {
  //   setTodos(todos.filter((todo) => {
  //     return !todo.done;
  //   }));
  // }

  return (
    <div className='App'>
      <Header onShow={ () => setActive(!active) } changeText={ active } />
      {active && <AddTask handleAddTask={ handleAddTask } /> }
      <Filters handleFilters={ filters } />
      {/* { todos.length > 0 ? <Todos listTodos={ todos } handleDone={ handleDone } handleDelete={ handleDelete } /> : 'No Todo Available, Add One' } */ }
      <Todos listTodos={ todos } handleDone={ handleDone } handleDelete={ handleDelete } />
    </div>
  );
}

export default App;
