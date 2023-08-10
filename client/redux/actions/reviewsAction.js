import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getReviews  = createAsyncThunk(
    'getReviews',
    async (obj) => {
    try {
        const response = await axios(`/api/reviews`, obj);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
    }
);
export const postReviews  = createAsyncThunk(
    'postReviews',
    async (obj) => {
    try {
        const response = await axios.post(`/api/reviews`, obj);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
    }
);