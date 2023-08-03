import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "../../redux/actions/reviewsAction";

const initialState = {
 reviews: [],
 loading: false,
 error: null,
};

const reviewsSlice = createSlice({
 name: "reviews",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(getReviews.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(getReviews.fulfilled, (state, action) => {
    state.loading = false;
    state.error = null;
    state.reviews = action.payload;
   })
   .addCase(getReviews.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
   });
 },
});

export default reviewsSlice.reducer;
