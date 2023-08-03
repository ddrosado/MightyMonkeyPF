import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000';

export const getBookings = createAsyncThunk(
    'bookings/getBookings',
    async () => {
      try {
        const response = await axios.get(`${url}/api/bookings`);
        console.log(response.data)
        return response.data;
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  );