import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../actions/userActions';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.error = "";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = 'Error occurred while fetching sports data.';
        state.users = [];
      });
  },
});

export const { increment } = usersSlice.actions;
export default usersSlice.reducer;