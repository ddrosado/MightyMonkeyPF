
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
        // filterBookings: (state, action) => {
        //     const {sport, date, search} = action.payload
        //     let filteredBookings = state.bookings;
        //     sport !== "all"? filteredBookings = state.bookings.filter(book=> book.court.sport.name == sport) : filteredBookings = state.bookings;
        //     date !== "all"? filteredBookings = state.bookingsCopy.filter(book=> book.date == date) : filteredBookings;
        //     state.bookingsCopy = state.bookingsCopy.filter(book=>book.court.sport.name.toLowerCase().includes(search.toLowerCase()) || book.court.name.toLowerCase().includes(search.toLowerCase()) || book.user.name.toLowerCase().includes(search.toLowerCase()))
        // }
        filterBookings: (state, action) => {
            const { sport, date, search } = action.payload;
            let filteredBookings = state.bookings;
        
            if (sport !== "all") {
                filteredBookings = filteredBookings.filter(book => book.court.sport.name === sport);
            }
        
            if (date !== "all") {
                filteredBookings = filteredBookings.filter(book => book.date == date);
            }
        
            filteredBookings = filteredBookings.filter(book =>
                book.court.sport.name.toLowerCase().includes(search.toLowerCase()) ||
                book.court.name.toLowerCase().includes(search.toLowerCase()) ||
                book.user.name.toLowerCase().includes(search.toLowerCase())
            );
        
            state.bookingsCopy = filteredBookings;
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