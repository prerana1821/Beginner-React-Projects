import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import setupMockServer from "./api/mock.server";

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);