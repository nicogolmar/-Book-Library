import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    }, 
    deleteBook: (state, action) => {
      const bookFound = state.find((book) => book.id === action.payload);

      if (bookFound) {
        state.splice(state.indexOf(bookFound), 1);
      }
    },
    updateBook: (state, action) => {
      const { id, title, imageLink, author, year, description, price } =
        action.payload;
      const bookFound = state.find((book) => book.id == id);
      console.log(action.payload);
      if (bookFound) {
        bookFound.id = id;
        bookFound.title = title;
        bookFound.imageLink = imageLink;
        bookFound.author = author;
        bookFound.year = year;
        bookFound.price = price;
        bookFound.description = description;
      }
      console.log(bookFound.title);
    },
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
