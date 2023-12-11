import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maxWidth: 0,
    maxHeight: 0,
}

const fishSlice = createSlice({
    name: "fish",
    initialState,
    reducers: {
        changeMaxWidht: (state, action) => {
            state.maxWidth = action.payload;
        },
        changeMaxHeight: (state, action) => {
            state.maxHeight = action.payload;
        }
    }

})

const { actions, reducer } = fishSlice;
export const { changeMaxWidht, changeMaxHeight } = actions;
export default reducer;