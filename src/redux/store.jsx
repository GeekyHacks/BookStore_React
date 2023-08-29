import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import booksReducer from './books/bookSlice';


//The store is the central place where your application state lives.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
  },
});
