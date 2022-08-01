import { createSlice } from '@reduxjs/toolkit';



export const planSlice = createSlice({
  name: 'user',
  initialState:{
    plan:null
  },
  reducers: {
    plan:(state,action)=>{
      state.plan = action.payload ;
    },

   
  },

});

export const { plan } = planSlice.actions;



export default planSlice.reducer;
