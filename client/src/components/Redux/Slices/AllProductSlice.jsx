// AllProductSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const GetData=createAsyncThunk('GetData',async()=>{
try {
    
    const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/pGetAll`);
    return res;

} 

catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });

}
})

const AllProductSlice = createSlice({
  name: "allproduct",
 
  initialState:[],   

 

  extraReducers:(builder)=>{
    builder
    .addCase(GetData.pending,(state,action)=>{
       
   
    })
    .addCase(GetData.fulfilled,(state,action)=>{
    return action.payload.data.exsit
    })
    .addCase(GetData.rejected,(state,action)=>{
    
    })
}

});

export const {} = AllProductSlice.actions;
export default AllProductSlice.reducer;
