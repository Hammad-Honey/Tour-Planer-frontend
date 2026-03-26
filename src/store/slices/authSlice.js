import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "../../APIs/auth" //API to get login user data


export const login = createAsyncThunk("/login", async (payload, { rejectWithValue }) => {
    try {
        const res = await loginUser(payload);
        console.log("res", res)
        return res;
    } catch (err) {
        return rejectWithValue(err.message || "Login failed");
    }

})

export const signup = createAsyncThunk("/signup", async (payload, { rejectWithValue }) => {
    console.log("Signup payload", payload)
    return signupUser(payload);
})
const savedUser = JSON.parse(localStorage.getItem("user"));
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: savedUser || null,
        isLoading: false,
        error: {
            status: false,
            message: null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log("fuilfilled result", action.payload)
                state.user = action.payload.user;
                state.isLoading = false
                console.log("fullfilled", action.payload)
                localStorage.setItem("user", JSON.stringify(state.user));
            })
            .addCase(login.rejected, (state, action) => {
                state.error.status = true;
                state.error.message = action.payload;
                state.isLoading = false;
                console.log("action rejected", action.payload)
            })

    }

});
export default authSlice.reducer