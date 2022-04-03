import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
  <Route path='/*' element={<App/>} />
  {/* <Route path='editor' element={<App/>} /> */}
    <Route path='login' element={ <Login/> } />
    <Route path='SignUp' element={ <SignUp/> } />
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
