import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice';
import locationReducer from './slices/locationSlice';





export const store=configureStore({
    reducer:{
        counter:counterReducer,
        map:locationReducer,
    }
})