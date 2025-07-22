import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFavourite: (state, action) => {
      state.items = state.items.filter(
        product => product.id !== action.payload.id
      );
    },

    toggleFavourite: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },

    clearFavourites: (state) => {
      state.items = [];
    },
  },
});

export const {
  addFavourite,
  removeFavourite,
  toggleFavourite,
  clearFavourites,
} = favouritesSlice.actions;

export const selectFavourites = state => state.favourites.items;
export const isProductFavourited = (state, productId) =>
  state.favourites.items.some(product => product.id === productId);

export default favouritesSlice.reducer;
