
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
        filterBookings: (state, action) => {
            console.log(action.payload)
            const {sport, date} = action.payload
            sport !== "all"? state.bookingsCopy = state.bookings.filter(book=> book.court.sport.name == sport) : null;
            date !== "all"? state.bookingsCopy = state.bookingsCopy.filter(book=> book.date == date) : null
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

export const { filterBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;