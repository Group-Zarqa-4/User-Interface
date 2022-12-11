import { createSlice } from "@reduxjs/toolkit";

const baseUrl = "http://localhost";
const fetchStores = createAsyncThunk(
  "stores/fetchStores",
  async (userId, thunkAPI) => {
    const response = await axios.get(baseUrl);
    return response.data;
  }
);

export const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: {
    // [fetchStores.pending]
  },
});
