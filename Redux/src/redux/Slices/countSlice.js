import { createSlice } from "@reduxjs/toolkit"
export const countSlice = createSlice({
    name: "count",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state,action) => {
            state.value += action.payload.value;
        },
        decrement: (state,action) => {
            state.value -= action.payload.value;
        },
        reset: (state,action) => {
            state.value = 0
        }
    }

})

export const {increment,decrement,reset} = countSlice.actions
export default countSlice.reducer