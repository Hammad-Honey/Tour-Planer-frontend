import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//importing the APIs from OpenTripMap.js
import { getHistoricLocations } from "../../APIs/openTripMap";
export const fetchLocations = createAsyncThunk("/fetchLocations", async (payload, { rejectWithValue }) => {
    console.log("payload", payload)
    return getHistoricLocations(payload)
});

import { getCityLocation } from "../../APIs/openTripMap";
export const fetchCity = createAsyncThunk('/fetchCityLocation', async (payload, { rejectWithValue }) => {
    console.log("payload", payload)
    return getCityLocation(payload)

})


const locationSlice = createSlice({
    name: "map",
    initialState: {
        isLoading: false,
        data: null,
        isError: {
            status: false,
            errorMsg: null
        }
    },

    // extrareducer is a function that has a builder that let us listen to the changes in fetch
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocations.pending, (state, action) => {
                state.isLoading = true 
            })
            .addCase(fetchLocations.fulfilled, (state, action) => {
                console.log("action.payload", action.payload)
                state.data = action.payload.features;
                state.isLoading = false
            })
            .addCase(fetchLocations.rejected, (state, action) => { 
                state.isError.status = true, state.isError.errorMsg = action.payload
            })
            .addCase(fetchCity.pending, (state, action) => {
                 state.isLoading = true 
            })
            .addCase(fetchCity.fulfilled, (state, action) => {
                console.log("action Payload", action.payload);
                state.data = action.payload;
                state.isLoading = false
            })
            .addCase(fetchCity.rejected, (state, action) => {
                state.isError.status = true;
                state.isError.errorMsg = action.payload
            })
    }


})


export default locationSlice.reducer