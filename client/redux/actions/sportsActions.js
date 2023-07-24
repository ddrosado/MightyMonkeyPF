import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000';

export const getSports = createAsyncThunk(
    'sports/getSports',
    async () => {
      try {
        const response = await axios.get(`${url}/api/sport`);
        return response.data;
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  );