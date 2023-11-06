import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const userDetail = createAsyncThunk("userDetail", async (data) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,
      data
    );
    return res;
  
} 
  catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });

  }
});

const Userslice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: false,
    user: null,
  },
  reducers:{
    delete_User:(state,action)=>{
      state.loading=false;
      state.error=false;
      state.user=null;
      
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userDetail.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(userDetail.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload.data;
      })

      .addCase(userDetail.rejected, (state, action) => {
      console.log(action.payload.error)
        state.error=action.error;
      });
  },
});

export const {delete_User} = Userslice.actions;






export default Userslice.reducer;


