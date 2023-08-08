import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000';

export const getBookings = createAsyncThunk(
    'bookings/getBookings',
    async () => {
      try {
        const response = await axios.get(`${url}/api/bookings`);
        return response.data;
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  );

  export const postBooking = createAsyncThunk(
    'bookings/postBooking',
    async (form, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${url}/api/bookings`, form);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error during postBooking:', error);
        return rejectWithValue(error.response.data); // Devuelve el error para que el reducer lo maneje
      }
    }
  );