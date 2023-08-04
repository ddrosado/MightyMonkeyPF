import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000';

export const getReviews  = createAsyncThunk(
    'api/reviews',
    async (obj) => {
    try {
        const response = await axios(`${url}/api/reviews`, obj);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.msg)
    }
    }
);