import React from "react";
import "./App.css";
// import axios from "axios";
import PlanetTable from "./Components/PlanetTable";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Registration from "./Components/Registration";
import LogIn from "./Components/LogIn";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PlanetTable />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
