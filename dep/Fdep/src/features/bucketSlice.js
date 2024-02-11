import { createSlice } from "@reduxjs/toolkit";
// import products from "../products";


const initialState = {
  products: [],
  cart:[],
  quantity: 0,  
  total: 0,
};

// console.log(initialState)
const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    clearBucket: (state) => {
      state.products = [];
    
    },
  },

});





export default bucketSlice.reducer
