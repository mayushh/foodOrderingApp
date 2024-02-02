import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const meraStore = configureStore({
    reducer:{
        cart:cartSlice,
    }
})
export default meraStore;