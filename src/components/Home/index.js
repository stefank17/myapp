import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (

    <div className="home-container">
        <h1>Welcome to Bubblify</h1>
        <p>The place for all your bubble needs</p>
        <Link
            to="/bubbles">Start your shopping here</Link>
    </div> 
);

export default Home;