import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/pruduct/product.slice"

const store = configureStore({
    reducer:{
        products: productReducer
    }
})

export default store