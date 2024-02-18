import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Labs from "./Labs";
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Nav from './Nav';

function App() {
  return (
    <HashRouter>
    <div>
    <Routes>
          <Route path="/"         element={<Nav/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
    </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
