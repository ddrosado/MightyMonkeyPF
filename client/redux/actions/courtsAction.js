import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postCourt = createAsyncThunk(
    'court/postCourt',
    async (obj) => {
      try {
        const response = await axios.post(`/api/courts`, obj);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.msg)
      }
    }
  );

  export const putCourt = createAsyncThunk(
    'courts/putCourt',
    async(obj)=>{
      try {
        return (await axios.put(`/api/courts`, obj)).data
      } catch (error) {
        throw new Error(error.response.data.msg)
      }
    }
  )
