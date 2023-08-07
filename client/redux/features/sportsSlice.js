import { createSlice } from '@reduxjs/toolkit';
import { getSportById, getSports, postSports, putSport } from '../actions/sportsActions';
import { postCourt } from '../actions/courtsAction';

const initialState = {
  sports: [],
  sportsCopy : [],
  sport:{},
  error: "",
};

const sportsSlice = createSlice({
  name: 'sports',
  initialState,
  reducers: {
    filterSports: (state, action) => {
      const {search, isAct} = action.payload
      if (isAct == "all"){
        state.sportsCopy = state.sports?.filter(sport=> sport.name.toLowerCase().includes(search.toLowerCase()))
      } else {
        state.sportsCopy = state.sports?.filter(sport=> sport.isActive == (isAct == "active"? true : false) && sport.name.toLowerCase().includes(search.toLowerCase()))
      } 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSports.fulfilled, (state, action) => {
        state.error = "";
        state.sports = action.payload;
        state.sportsCopy = action.payload;
      })
      .addCase(getSports.rejected, (state, action) => {
        state.error = 'Error occurred while fetching sports data.';
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
      // .addCase(putSport.fulfilled, (state, action)=>{
      //   console.log(action.payload)
      // })
      // .addCase(postCourt.fulfilled, (state, action) =>{
      //   console.log(action.payload)
      // })
      // .addCase(postCourt.rejected, (state, action)=>{
      //   console.log(action.payload, "no s epudo")
      // })
  },
});

export const { filterSports } = sportsSlice.actions;
export default sportsSlice.reducer;