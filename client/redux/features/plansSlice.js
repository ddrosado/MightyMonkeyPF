import { createSlice } from "@reduxjs/toolkit";
import { getPlans } from "../actions/plansActions";



const initialState = {
    plans: [],
    onePlan: {}
};

const plansSlice = createSlice({
    name: "plans",
    initialState,
    reducers:{
        getFindPlan: (state, action)=>{
            const id = action.payload
            state.onePlan = state.plans.find(plan=> plan.id == id)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPlans.fulfilled, (state, action)=>{
            state.plans = action.payload;
        });
    }    
}
)

export const { getFindPlan } = plansSlice.actions;
export default plansSlice.reducer;