import './App.css';
import Header from "./components/Header";
import Search from './components/Search';
import React from 'react';
import { useState } from "react";
import ResultContainer from './components/ResultContainer';

const nameGen = require('@rstacruz/startup-name-generator');

function App() {

  const [active, setActive] = useState(true);
  const [name, setName] = useState([]);

  const handleOnChange = (value) => {
    let name = nameGen(value);
    setName(value ? name : []);
    // console.log(name);
    // setActive(value.length > 0 ? false : true);
    // setActive(!(value.length > 0));
    setActive(!value);
  }

  return (
    <div className="App">
      <div className='main'>
        <Header active={ active } />
        <Search handleOnChange={ handleOnChange } />
        <ResultContainer names={ name } />
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
