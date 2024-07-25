import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import GoCart from "./pages/GoCart";
import Home from './pages/Home';
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Search from "./pages/Search";




function App(){
  return (
   <> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/orders" element={<Orders/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/goCart" element={<GoCart/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
