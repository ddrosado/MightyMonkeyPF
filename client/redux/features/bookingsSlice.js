import { getBookings } from "../actions/bookingAction";

const { createSlice } = require("@reduxjs/toolkit")



const initialState = {
    bookings: [],
    bookingsCopy: []
}

const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers:{
        increment: (state, action) => {
            state.lala = "lala"
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getBookings.fulfilled, (state, action)=>{
            state.bookings = action.payload;
            state.bookingsCopy = action.payload;
        });
    }    
}
)

export const { increment } = bookingsSlice.actions;
export default bookingsSlice.reducer;