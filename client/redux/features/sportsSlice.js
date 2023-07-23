import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sports: 0,
};

const sportsSlice = createSlice({
  name: 'sports',
  initialState,
  reducers: {
    increment: (state) => {
      state.sports += 1;
    },
  },
});

export const { increment } = sportsSlice.actions;
export default sportsSlice.reducer;