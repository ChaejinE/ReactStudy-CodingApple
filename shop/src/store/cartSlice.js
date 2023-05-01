import { createSlice } from '@reduxjs/toolkit'

let carts = createSlice({
    name: "carts",
    initialState: [],
    reducers: {
        addCart(state, cart) {
            if (state.find((elem) => { return (elem.id === cart.payload.id) })) {
                console.log("Duplicated")
                addCount(cart.payload.id)
                return;
            }
            state.push(cart.payload)
        },
        addCount(state, id) {
            ++state[id.payload].count;
        }
    }
})

export let { addCart, addCount } = carts.actions
export default carts
