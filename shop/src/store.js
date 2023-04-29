import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from "./store/userSlice.js"
import carts from "./store/cartSlice.js"


let stock = createSlice({
    name: "stock",
    initialState: [10, 11, 12]
})

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        carts: carts.reducer
    }
})