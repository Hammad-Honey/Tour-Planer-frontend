import { createSlice } from "@reduxjs/toolkit";



const data=createSlice({
    name:'counter',
    initialState:{
        count:0,
        isLoading:false,

    },
    reducers:{  
        increment:(state)=>{state.count+=1},
        decrement:(state)=>{state.count-=1},
        reset:(state)=>{state.count=0},
        incrementByAmount:(state, action)=>{
            state.count += action.payload
        }
    }

})
export const {increment, decrement,reset,incrementByAmount} = data.actions;

export default data.reducer; 