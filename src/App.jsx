import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Landing from "./screens/Landing.jsx";
import Game from "./screens/Game.jsx";

function App() {
  return (
    <div className="h-screen bg-slate-950 text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
