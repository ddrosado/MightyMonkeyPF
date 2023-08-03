import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000';

export const postCourt = createAsyncThunk(
    'court/postCourt',
    async (obj) => {
      try {
        console.log(obj)
        const response = await axios.post(`${url}/api/courts`, obj);
        console.log(response.data)
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
        return (await axios.put(`${url}/api/courts`, obj)).data
      } catch (error) {
        throw new Error(error.response.data.msg)
      }
    }
  )
