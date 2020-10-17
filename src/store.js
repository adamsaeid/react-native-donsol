import { createSlice, configureStore } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    deck: [],
  },
  reducers: {
    setDeck: (state, action) => { 
      state.deck = action.payload;
    }
  }
});

const store = configureStore({
  reducer: gameSlice.reducer
});

export const { setDeck } = gameSlice.actions;
export default store;
