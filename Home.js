import React from 'react';
import {Link} from 'react-router-dom';
import Image from '../assets/pizzaP.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${Image})`}}>
  <div className="headerContainer">
    <h1>Terryann's Pizza Hub</h1>
    <p>YUMMY PIZZA INNIT </p>
    <Link to="/menu">
    <button>ORDER NOW</button>
    </Link>
    </div>
    </div>
  );
}

export default Home;
