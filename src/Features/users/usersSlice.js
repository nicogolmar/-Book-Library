import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '1',
    email: 'admin@admin.com',
    name: 'Administrator',
    password: 'admin'
  }
];

const usersSlice = createSlice({
    name: "users", 
    initialState,
    reducers: {
        addUser: (state, action) => {
          state.push(action.payload);
        },
    },
});

export const {addUser} = usersSlice.actions;

export default usersSlice.reducer;
