import "./App.css";
import CharList from "./components/CharacterList";
import APIChar from "./pages/APIcharacters";
import HomePage from "./pages/HomePage";
import Navbar from "./components/NavBar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharList />} />
        <Route path="/chuck" element={<APIChar />} />
      </Routes>
    </div>
  );
}

export default App;
