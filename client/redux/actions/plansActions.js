import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getPlans = createAsyncThunk(
    'plans/getPlans',
    async () =>{
        try {
            const resp = await axios("/api/plans")
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
            const resp = await axios.post("/api/plans" , obj)
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
            const resp = await axios.put("/api/plans" , obj)
            return resp.data
        } catch (error) {
            throw new Error(error.response.data.msg)
        }
    }
)

export const deletePlans = createAsyncThunk(
    'plans/deletePlans',
    async (id) =>{
        try {
            const resp = await axios.delete("/api/plans" , {data:{id:id}})
            return resp.data
        } catch (error) {
            throw new Error(error.response.data.msg)
        }
    }
)