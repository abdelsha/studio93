import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
function Home() {
  return (
  <div className='Home_main'>
    <Link to="/richmond-road" className='Home_image1'>
      <img src='/images/Home1.jpg' alt=''/>
    </Link>
    
    <Link to="/richmond-road" className='Home_image2'>
    <img src='/images/Richmond4.jpg' alt=''/>
    </Link>
    <Link  to="/richmond-road"className='Home_image3'>
    <img src='/images/Home3.jpg' alt=''/>
    </Link>
    <Link  to="/richmond-road"className='Home_Click_Button'>
      <h2>Learn More</h2>
    </Link>
  </div>
  );
}

export default Home;
