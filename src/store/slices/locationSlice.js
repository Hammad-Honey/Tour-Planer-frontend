import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//importing the APIs from OpenTripMap.js
import { getHistoricLocations } from "../../APIs/openTripMap";
export const fetchLocations=createAsyncThunk("fetchLocations",()=>getHistoricLocations);


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

    // extrareducer is a function that has a builder that let us listen to the changes in fetch
    extraReducers: (builder)=>{
        builder.addCase(fetchLocations.pending, (state,action)=>{ state.isLoading=true});
        builder.addCase(fetchLocations.fulfilled, (state,action)=>{state.data=action.payload; state.isLoading=false})
        builder.addCase(fetchLocations.rejected, (state,action)=>{state.isError.status=true, state.isError.errorMsg=action.payload})
    }

    
})


export default locationSlice.reducer