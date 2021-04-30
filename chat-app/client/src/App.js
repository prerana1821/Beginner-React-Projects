import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Join } from "./Join/Join";
import { Chat } from "./Chat/Chat";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Join />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
