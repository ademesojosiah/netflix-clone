import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import Plan from '../Plan';

const ProfileScreen = () => {
    const userPlan = useSelector((state)=>state.plan.plan)
    const user = useSelector((state)=>state.user.user);
  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
            <img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" alt="" />
            <div className="profileScreen_details">
                <h2>{user.email}</h2>
                <div className="profileScreen_plans">
                <h3>Plans Current Plan : {userPlan}</h3>
                <div className="profileScreen_plan">
                    <Plan price={'$50'}  planType={'Netflix Standard'}/>
                    <Plan price={'$100'} planType={'Netflix Basic'}/>
                    <Plan price={'$200'} planType={'Netflix Premium'} subscribe={true} />
                </div>

                <button onClick={()=>auth.signOut()} className='profileScreen_signOut'>Sign</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
