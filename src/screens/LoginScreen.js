import React, { useState } from 'react';
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
    const [signIn, setsignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
            <img className='loginScreen_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <button className='loginScreen_button' onClick={()=>setsignIn(true)}>Sign In</button>
            <div className="loginScreen_body">
                {signIn ? (<SignupScreen/>) : (
                    <div>
                        <h1>Unlimited Films, Tv programmes and more</h1>
                        <h2>Watch anywhere,Cancel at any time.</h2>
                        <h3>Ready to watch ?, Enter your email to create or restart your membership</h3>
                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder='Email Address' />
                            <button className='loginScreen_getStarted' onClick={()=>setsignIn(true)} >GET STARTED</button>
                        </form> 
                    </div>
                    </div>
                )}
                
            </div>
            <div className="loginScreen_gradient"/> 

        </div>
      
    </div>
  )
}

export default LoginScreen
