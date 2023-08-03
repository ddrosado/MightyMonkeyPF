
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
            const {sport, date, search} = action.payload
            sport !== "all"? state.bookingsCopy = state.bookings.filter(book=> book.court.sport.name == sport) : state.bookingsCopy = state.bookings;
            date !== "all"? state.bookingsCopy = state.bookingsCopy.filter(book=> book.date == date) : null;
            state.bookingsCopy = state.bookingsCopy.filter(book=>book.court.sport.name.toLowerCase().includes(search.toLowerCase()) || book.court.name.toLowerCase().includes(search.toLowerCase()) || book.user.name.toLowerCase().includes(search.toLowerCase()))
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