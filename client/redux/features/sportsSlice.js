import { createSlice } from '@reduxjs/toolkit';
import { getSportById, getSports, postSports, putSport } from '../actions/sportsActions';
import { postCourt } from '../actions/courtsAction';

const initialState = {
  sports: [],
  sport:{},
  error: "",
};

const sportsSlice = createSlice({
  name: 'sports',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.sports = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSports.fulfilled, (state, action) => {
        state.error = "";
        state.sports = action.payload;
      })
      .addCase(getSports.rejected, (state, action) => {
        state.error = 'Error occurred while fetching sports data.';
        state.sports = [];
      })
      .addCase(postSports.rejected, (state, action)=>{
        state.error = 'Error occurred while fetching sports data.';
      })
      .addCase(postSports.fulfilled, (state, action)=>{
        return action.payload
      })
      .addCase(getSportById.fulfilled, (state, action) =>{
        state.sport = action.payload
      })
      .addCase(getSportById.rejected, (state, action)=>{
        return action.payload
      })
      .addCase(putSport.fulfilled, (state, action)=>{
        console.log(action.payload)
      })
      .addCase(postCourt.fulfilled, (state, action) =>{
        console.log(action.payload)
      })
      .addCase(postCourt.rejected, (state, action)=>{
        console.log(action.payload)
      })
  },
});

export const { increment } = sportsSlice.actions;
export default sportsSlice.reducer;