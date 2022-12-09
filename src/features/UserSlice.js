import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
    },
    reducers:{
        contact:(state,action)=>{
            state.user= action.payload;
        },
        décontact:(state)=>{
            state.user=null;
        }
    },
});

export const {contact,décontact} = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;