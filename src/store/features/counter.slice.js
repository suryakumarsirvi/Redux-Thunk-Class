import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state)=>{
            state.count += 1;
        },
        decrement: (state)=>{
            state.count -= 1;
        },
        reset: (state)=>{
            state.count = 0;
        },
        increaseByVal: (state, actions)=>{
            state.count += actions.payload;
        }
    }
})

export const { increment, decrement, reset, increaseByVal } = countSlice.actions;
export default countSlice.reducer;