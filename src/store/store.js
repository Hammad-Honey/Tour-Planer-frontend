import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import locationReducer from './slices/locationSlice';
import AuthReducer from './slices/authSlice';



export const store=configureStore({
    reducer:{
        counter:counterReducer,
        map:locationReducer,
        auth:AuthReducer,
    }
})