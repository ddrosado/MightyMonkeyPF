import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
    'sports/getSports',
    async () => {
      try {
        const response = await axios.get(`api/users`);
        return response.data;
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  );

  
export const createUser = createAsyncThunk(
    'users/createUser',
    async (payload) => {
      try {
        const response = await axios.post(`api/users`, payload);
        response ? 
        alert("You have successfully registered")
        : null
        return response.data;
      } catch (error) {
        alert(error)
      }
    }
  );

  export const deleteUser = createAsyncThunk(
    'users/delete',
    async(id)=>{
      try {
        const response = await axios.delete(`api/users`, {data:{id: id}});
        return response.data;
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  );


  export const putUser = createAsyncThunk(
    'users/putUser',
    async (obj) => {
      try {
        const response = await axios.put(`api/users`, obj);
        return response.data;
      } catch (error) {
        throw error.response.data.msg;
      }
    }
  );
