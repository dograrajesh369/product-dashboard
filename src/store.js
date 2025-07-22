// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productSlice';
import favouritesReducer from './features/favourites/favouritesSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    favourites: favouritesReducer,
  },
});

export default store;
