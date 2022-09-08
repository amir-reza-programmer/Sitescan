import {  Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Home from './components/Home';
import './App.css';


function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const isDesk = !isMobile;

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="about"/>
            <Route path="/" element={<Navigate replace to="home" />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
