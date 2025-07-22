// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import favouritesReducer from '../features/favourites/favouritesSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    favourites: favouritesReducer,
  },
});
