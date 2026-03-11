import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//importing the APIs from OpenTripMap.js
import { getHistoricLocations } from "../../APIs/openTripMap";


export const fetchLocations=createAsyncThunk("fetchLocations",getHistoricLocations);


const locationSlice=createSlice({
    name:"map",
    initialState:{
        isLoading:false,
        data:null,
        isError:{
            status:false,
            errorMsg:null
        }

    },
    //We Use extra reducers to handel asyncthunk 
    extraReducers: (builder)=>{
        builder.addCase(fetchLocations.pending, (state,action)=>{ state.isLoading=true});
        builder.addCase(fetchLocations.fulfilled, (state,action)=>{state.data=action.payload; state.isLoading=false})
        builder.addCase(fetchLocations.rejected, (state,action)=>{state.isError.status=true, state.isError.errorMsg=action.payload})
    }

    ,
    reducers:{
        print:(state)=>{state.zoom=action.payload}


    }
})


export const {print}=locationSlice.actions

export default locationSlice.reducer