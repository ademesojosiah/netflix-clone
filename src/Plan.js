import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { plan } from './features/planSlice';
import './Plan.css';

const Plan = ({price , planType, subscribe}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        subscribe && dispatch(plan(planType)) 
    },[dispatch,subscribe,planType]);
  return (
    <div className='plan'>
        <div className="plan_details">
            <h3>{planType}</h3>
            <h4>{price}</h4>
        </div>
        <button className={subscribe ? 'grey_button' : 'plan_button'}>{subscribe ? 'current package': 'subscribe'}</button>
      
    </div>
  )
}

export default Plan
