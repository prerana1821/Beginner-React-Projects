import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { RoomProvider } from "./RoomProvider/RoomProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <RoomProvider> */}
      <App />
      {/* </RoomProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
