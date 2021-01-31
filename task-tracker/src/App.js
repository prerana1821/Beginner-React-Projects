import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  
    const [tasks, settasks] = useState([
        {
            id: 1,
            text: 'Learn React',
            day: 'Jan 31st at 12:00pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Learn JS',
            day: 'Jan 11st at 4:00pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Make JS Projects',
            day: 'Jan 21st at 7:00pm',
            reminder: true,
        }
    ])

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      {/* <Header title={1}/> */}
      <Tasks tasks={tasks}/>
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



