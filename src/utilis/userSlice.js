// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            // logic to add user
            return action.payload;
        },
        removeUser: (state, action) => {
            // logic to remove user
            return null;
        }
    }
});

// Export the action creators
export const { addUser, removeUser } = userSlice.actions;

// Export the reducer as the default export
export default userSlice.reducer;
