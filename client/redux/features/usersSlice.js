import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userActions";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.users = [];
      });
  },
});

export const { increment } = usersSlice.actions;
export default usersSlice.reducer;
