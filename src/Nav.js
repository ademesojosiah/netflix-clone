import React, { useEffect, useState } from 'react';
import './Nav.css'

const Nav = () => {
const [show, setShow] = useState(false);

const transitionNav =()=>{
    if(window.scrollY > 100){
        setShow(true);
    }else{
        setShow(false);
    }
}


useEffect(()=>{
    window.addEventListener('scroll',transitionNav)

    return ()=>{
        window.removeEventListener('scroll',transitionNav)
    }
})




  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_content">
            <img
            className='nav_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <img
            className='nav_avatar'
            src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" alt="" />
        </div>
    </div>
  )
}

export default Nav;
