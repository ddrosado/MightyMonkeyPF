import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getSports = createAsyncThunk(
    'sports/getSports',
    async () => {
      try {
        const response = await axios.get(`/api/sport`);
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
        const response = await axios.post(`/api/sport`, obj);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.msg)
      }
    }
  );

  // export const getSportById = createAsyncThunk(
  //   'sports/getSortId',
  //   async(id)=>{
  //     try {
  //       return (await axios(`${url}/api/sport/${id}`)).data
  //     } catch (error) {
  //       throw new Error(error.response.data.msg)
  //     }
  //   }
  // )

  export const putSport = createAsyncThunk(
    'sports/putSport',
    async(obj)=>{
      try {
        return (await axios.put(`/api/sport`, obj)).data
      } catch (error) {
        throw new Error(error.response.data.msg)
      }
    }
  )

  export const deletSport = createAsyncThunk(
    'sport/deletSport',
    async(id)=>{
      try {
        return await axios.delete(`/api/sport`,  {data:{id:id}})
      } catch (error) {
        throw new Error(error.response.data.msg)
      }
    }
  )
