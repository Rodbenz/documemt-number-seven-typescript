import { createSlice } from '@reduxjs/toolkit'


export const dataUser = createSlice({
  name:'user',
  initialState: {
    valArray : []
},
  reducers: {
    dataUserpersonnell: (state,action) => {
      state.valArray = action.payload 
      // console.log(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { dataUserpersonnell } = dataUser.actions

export default dataUser.reducer