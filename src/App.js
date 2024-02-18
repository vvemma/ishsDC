import './App.css';
import {Route, Routes} from "react-router-dom";
import BoardList from "./routes/BoardList";
import Home from "./routes/Home";
import MyList from "./routes/MyList";
import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/Home" element ={<Home/>}/>
      <Route path="/MyList" element={<MyList/>}/>
      <Route path='/' element={<BoardList/>}/>
    </Routes>
  );
}

export default App;
