import React from 'react';
import { Link } from 'react-router-dom';


 function Navbar() {
  return (
    <>
    <div className="nav-main">
    
    <div className="logo"> 
      <img src="/gofoods.png" alt="logo image"></img>
      GoFoods
    </div>
    <div className="nav-opt">
     
      <ul className="list-nav">
        <Link className="home" to="/">Home</Link>
        <Link className="users" to="/search">Search</Link>
        <Link className="orders" to="/orders">Orders</Link>
        <Link className="profile" to="/profile">Profile</Link>
        <Link className="login" to="/goCart">GoCart</Link>
        
      </ul>
      
      
    </div>
    </div>
    </>

  );
}

export default Navbar;