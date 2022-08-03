import { auth } from '../firebase.js'
import React, { useRef, useState } from 'react';
import './SignupScreen.css';
import HomeScreen from './HomeScreen';


const SignupScreen = () => {
    const [signInError, setsignInError] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function signIn(e){
        e.preventDefault();
        
        (emailRef.current.value == '' || passwordRef.current.value == '')?( setsignInError('the email or the password is empty')):(
        auth.signInWithEmailAndPassword(emailRef.current.value ,passwordRef.current.value)
        .then((authUser)=>{
            return <HomeScreen />
        }).catch((error)=>{
            setsignInError(error.message);
        })
        )
    }

    function register(e){
        e.preventDefault();

        (emailRef.current.value == '' || passwordRef.current.value == '')?( setsignInError('the email or the password is empty')):(
        auth.createUserWithEmailAndPassword(emailRef.current.value ,passwordRef.current.value)
        .then((authUser)=>{
            setsignInError('click sign in')
        }).catch((error)=>{
            setsignInError(error.message);
        })
        )

    
    };


  return (
    <div className='signupScreen'>
       <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <h6>{signInError}</h6>
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4><span className='signupScreen_grey'>New to Netflix?</span> <span className="signupScreen_link" onClick={register}>Sign Up now.</span></h4>
       </form>
    </div>
  )
}

export default SignupScreen
