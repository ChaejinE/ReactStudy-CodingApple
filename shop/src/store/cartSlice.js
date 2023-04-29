import { createSlice } from '@reduxjs/toolkit'

let carts = createSlice({
    name: "carts",
    initialState: [],
    reducers: {
        addCart(state, cart) {
            state.push(cart.payload)
        }
    }
})

export let { addCart } = carts.actions
export default carts
