import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3000"

export const getPlans = createAsyncThunk(
    'plans/getPlans',
    async () =>{
        try {
            const resp = await axios(url+"/api/plans")
            return resp.data
        } catch (error) {
            throw new Error(error.response.data.msg)
        }
    }
)

export const postPlans = createAsyncThunk(
    'plans/postPlans',
    async (obj) =>{
        try {
            const resp = await axios.post(url+"/api/plans" , obj)
            return resp.data
        } catch (error) {
            throw new Error(error.response.data.msg)
        }
    }
)

export const putPlans = createAsyncThunk(
    'plans/putPlans',
    async (obj) =>{
        try {
            const resp = await axios.put(url+"/api/plans" , obj)
            return resp.data
        } catch (error) {
            throw new Error(error.response.data.msg)
        }
    }
)