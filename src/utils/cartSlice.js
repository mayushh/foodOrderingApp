import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart ",
    initialState :{
        items : [],

    },
    reducers:{
        addItem : (state, action)=>{
            state.items.push(action.payload)

        },
        clearItems: (state, action)=>{
            state.items = []
        }
        
    }
})
export const {addItem, clearItems} = cartSlice.actions;
export default cartSlice.reducer;