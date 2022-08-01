import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import planChanger from '../features/planSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    plan: planChanger
    
  },
});
