import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
   <header 
   className='banner'
   style={{
   backgroundSize: 'cover',
   backgroundImage: 'url("https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg")',
   backgroundPosition: 'center center'
   }}>
    <div className='banner_content'>
        <h1 className="banner_title">Movie Name</h1>
        <div className=''></div>
    </div>
   </header>
  )
}

export default Banner;
