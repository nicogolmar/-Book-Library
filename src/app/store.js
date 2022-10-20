import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Features/books/booksSlice";
import sysConfigSlice from "../Features/sysConfig/sysConfigSlice";
import usersReducer from "../Features/users/usersSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    users: usersReducer,
    sysConfig: sysConfigSlice
  },
});
