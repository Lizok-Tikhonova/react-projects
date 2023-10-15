import React from "react";
import './styles/main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";



function App() {
  return (

    <div className="App">

      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/project/:id" element={<Project/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
