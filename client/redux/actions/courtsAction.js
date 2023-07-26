import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000';

export const postCourt = createAsyncThunk(
    'court/postCourt',
    async (obj) => {
      try {
        const response = await axios.post(`${url}/api/courts`, obj);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.msg)
      }
    }
  );
