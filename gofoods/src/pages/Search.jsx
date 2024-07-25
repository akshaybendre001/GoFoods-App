import { FaSearch } from "react-icons/fa";
import React from 'react';
import './Search.css';
import Navbar from "../components/Navbar";


function Search() {
  return (
    <div className="input-div">
      <Navbar/>
      <h2>Whats on your Mind?</h2>
      <input className="input" type="text" placeholder="Search for Restaurents and food"></input><FaSearch id="icon"></FaSearch>
      
        <h2>Popular Cuisines</h2>
      <div className="image-container">
        <div className="images">
        <img src="PaneerTikka.gif"></img>
        <img src="rollsmania.avif"></img>
        <img  src="Nonvegthali.gif"></img>
        <img src="drinks.webp"></img>
        <img src="Cheeseburger.gif"></img>
        <img id="waiter" src="waiter.gif"></img>
        </div>
      </div>  
    </div>

  )
}

export default Search;