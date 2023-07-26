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

  export const postSports = createAsyncThunk(
    'sports/postSports',
    async (obj) => {
      try {
        const response = await axios.post(`${url}/api/sport`, obj);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.msg)
      }
    }
  );

