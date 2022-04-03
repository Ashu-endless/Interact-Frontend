import { Route, Routes } from "react-router-dom";

import './App.css';
import Nav from './components/nav/Nav';
import Home from "./components/Home/Home";
import Editor from "./components/editor/Editor";
function App() {
  return (
    <>
    
    <Nav />
    <Routes>
      <Route exact path='' element={<Home/>} />
      <Route exact path='editor' element={ <Editor/> } />
    </Routes>
    </>
  );
}

export default App;
