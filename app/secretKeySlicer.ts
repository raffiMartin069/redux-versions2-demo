import { createSlice } from "@reduxjs/toolkit";

const secretKeySlice = createSlice({
    "name": "secretKey",
    "initialState": {
        "isVisible":false
    },
    "reducers": {
        "visibilityToggle": (state) => {
            state.isVisible = !state.isVisible;
        }
    }
});

export const { visibilityToggle } = secretKeySlice.actions;
export default secretKeySlice.reducer;