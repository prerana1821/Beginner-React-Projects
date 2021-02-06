import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      day: "Jan 31st at 12:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Learn JS",
      day: "Feb 11st at 4:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Make JS Projects",
      day: "June 21st at 7:00pm",
      reminder: false,
    },
  ]);

  // Submit Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    console.log(task);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deteleTask = (id) => {
    // console.log("Delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) => {
        console.log(task);
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };

  return (
    <div className='container'>
      <Header
        title='Task Tracker'
        onShowAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* <Header title={1}/> */}
      {showAddTask && <AddTask onAddTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deteleTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks Avaiable"
      )}
    </div>
  );
}

// Class Based Component for App (Also need to import react for class based comp, not required for functional components)
// class App extends React.Component {
//   render(){
//     return <h1>Hello from Class</h1>
//   }
// }

export default App;

// Can also use this when we don't want the div
// let bool = true;
//  return (
//    <>
//      <h1>Hello React</h1>
//      {/* conditionals */}
//      <h2>Hello {bool ? 'Yes': 'No'}</h2>
//    </>
//  );
