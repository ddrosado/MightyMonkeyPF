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

