import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../services/user.service";

export const fetchUsersData = createAsyncThunk('/getUserAPI',async ()=>{
    const res = await fetchUsers();
    return res.data;
})

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: null,
        loading: true,
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchUsersData.pending, (state)=>{
            state.loading = true;
            state.error = "Fetching Users Pending"
        })

        builder.addCase(fetchUsersData.rejected, (state)=>{
            state.loading = true;
            state.error = "Fetching Users Rejected"
        })

        builder.addCase(fetchUsersData.fulfilled, (state, actions)=>{
            state.loading = false;
            state.error = null;
            state.users = actions.payload
        })
    }
})

export default userSlice.reducer