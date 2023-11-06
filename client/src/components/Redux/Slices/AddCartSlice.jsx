import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getCatData=createAsyncThunk('getCatData',async()=>{
    try {
    
        const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/getcartdata`);
        return res;
    
    } 
    
    catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    
    }
    
})


const AddCartSlice=createSlice({
    name:'addCart',
    initialState:null,
    reducers:{
        delete_cart:(state,action)=>{
            
           return state=null;
        }
    },

    extraReducers:(builder)=>{
builder
.addCase(getCatData.pending,(state,action)=>{
       
   
})
.addCase(getCatData.fulfilled,(state,action)=>{
    return action.payload.data.allDataCart;
   
})
.addCase(getCatData.rejected,(state,action)=>{
    
})

    }
})

export const {delete_cart}=AddCartSlice.actions;
export default AddCartSlice.reducer