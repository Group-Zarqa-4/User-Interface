import { configureStore } from "@reduxjs/toolkit";
import { storeSlice } from "./features/storesSlice";
const store = configureStore({
  reducer: {
    stores: storeSlice.reducer,
  },
});

export default store;
