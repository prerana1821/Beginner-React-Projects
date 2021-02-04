import './App.css';
import Header from "./components/Header";
import Search from './components/Search';
import React from 'react';
import { useState } from "react";

function App() {

const [active, setActive] = useState(true);

const handleOnChange = (value) => {
  setActive(value.length > 0 ? false : true);
}

  return (
    <div className="App">
      <div className='main'>
      <Header active={active} />
      <Search handleOnChange={handleOnChange} />
      </div>
    </div>
  );
}


// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       headerExpanded: true,
//     };
//   }

//   handleInputChange = (inputText) => {
//     this.setState({
//       headerExpanded: !inputText,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Header
//           active={this.state.headerExpanded}
//         />
//         <Search handleOnChange={this.handleInputChange} />
//       </div>
//     );
//   }
// }

export default App;
