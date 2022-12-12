import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost";
const fetchStores = createAsyncThunk(
  "stores/fetchStores",
  async (userId, thunkAPI) => {
    const response = await axios.get(baseUrl);
    return response.data;
  }
);

const initialState = {};
export const storeSlice = createSlice({
  name: "stores",
  initialState: {},
  reducers: {},
  extraReducers: {
    // [fetchStores.pending]
  },
});
