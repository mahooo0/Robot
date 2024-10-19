// store/slices/GlobalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const GlobalSlice = createSlice({
    name: 'global',
    initialState: { activeBarindex: 0 }, // Make sure 'value' exists
    reducers: {
        setActiveBar: (state, action) => {
            state.activeBarindex = action.payload;
        },
    },
});

export const { setActiveBar } = GlobalSlice.actions;
export default GlobalSlice.reducer;
