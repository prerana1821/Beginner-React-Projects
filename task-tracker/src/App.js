import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header title='Task Tracker'/>
      {/* <Header title={1}/> */}
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



