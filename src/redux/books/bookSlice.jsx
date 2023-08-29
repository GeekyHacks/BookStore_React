import { createSlice } from '@reduxjs/toolkit';
import BookItems from './bookItems';
const initialState = {
  bookItem: BookItems,
  isLoading: true,
};

const bookSlice = createSlice({ name: 'books', initialState });

console.log(bookSlice);

export default bookSlice.reducer;
