import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useState, useEffect} from 'react';
import axios from 'axios';

function Home() {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response=>{
      setCategories(response.data.categories);
    })
    .catch(error=>{
      console.log("Error fetching the data", error);
    });

  },[])
  return (
    <div> <Navbar/>
    <center><h1>Restaurant Menu Categories</h1></center>
    
    <div className="container">
    <div className="cards">
      
        {categories.map(category => (
          <div className="card"> 
            <h2>{category.strCategory}</h2>
            <img src={category.strCategoryThumb} alt={category.strCategory} width="100" />
            <p>{category.strCategoryDescription}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      
      </div>
    </div>
    <Footer></Footer>
    
    </div>
    
  )
}
export default Home;