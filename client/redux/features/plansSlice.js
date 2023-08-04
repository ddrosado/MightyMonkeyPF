import { createSlice } from "@reduxjs/toolkit";
import { getPlans } from "../actions/plansActions";



const initialState = {
    plans: []
}

const plansSlice = createSlice({
    name: "plans",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPlans.fulfilled, (state, action)=>{
            state.plans = action.payload;
        });
    }    
}
)

export default plansSlice.reducer;