import { createSelector } from "reselect";


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], (cartItems) => cartItems.reduce((initValue, currentItem) => (initValue + currentItem.quantity), 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems], (cartItems) => cartItems.reduce((initValue, currentItem) => (initValue + currentItem.quantity * currentItem.price), 0)
)