import { configureStore } from "@reduxjs/toolkit"; 

const store = configureStore({
    reducer:{
        stores:storeSlice.reducer
    },
})

export default store