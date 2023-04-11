import { createSlice, createSelector } from "@reduxjs/toolkit";
import products from "../data/products";
import cart from "../data/cart";
import { useSelector } from "react-redux";

const initialState = {
    item: [],
    delieveryFree: 10,
    freeDelieveryFrom: 200
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addcartItem: (state, action) => {
            const newProduct = action.payload.product;
            const cartItem = state.item.find((item) => item.product.id === newProduct.id)
            if(cartItem)
            {
                cartItem.quantity += 1
            }
            else {
                state.item.push({product: newProduct, quantity: 1 }); 
            }
        },
        changeQuantity: (state, action) => {
            const {productId, amount} = action.payload;
            const cartItem = state.item.find(item => item.product.id === productId);
            if(cartItem)
            {
                cartItem.quantity += amount
            }
            if(cartItem.quantity <=0)
            {
                state.item = state.item.filter((item)=>item !== cartItem)
            }
        }
    }
})
export const selectnumberofItems = (state) => state.cart.item.length;
export const selectSubTotal = (state) => state.cart.item.reduce((sum, cartItem)=> sum + cartItem.product.price * cartItem.quantity, 0);

const cartSelector = (state) => state.cart;
export const selectDeliveryPrice = createSelector(
    cartSelector,
    selectSubTotal,
    (cart, subtotal) => (subtotal > cart.freeDelieveryFrom ? 0 : cart.delieveryFree)
)

export const selectTotal = createSelector(
    selectSubTotal, selectDeliveryPrice, (subtotal, delivery) => subtotal + delivery
)