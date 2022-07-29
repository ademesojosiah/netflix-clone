import React from 'react';
import './SignupScreen.css'


const SignupScreen = () => {

    function signIn(e){
        e.preventDefault();
    }

    function register(e){
        e.preventDefault();
    }


  return (
    <div className='signupScreen'>
       <form>
        <h1>Sign In</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4><span className='signupScreen_grey'>New to Netflix?</span> <span className="signupScreen_link" onClick={register}>Sign Up now.</span></h4>
       </form>
    </div>
  )
}

export default SignupScreen
