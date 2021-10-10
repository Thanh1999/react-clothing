
import { createSelector } from "reselect";
import { Item } from "../../model/Item";
import { RootState } from "../root-state";



const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], (cartItems) => cartItems.reduce((initValue: number, currentItem: Item) => (initValue + currentItem.quantity), 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems], (cartItems) => cartItems.reduce((initValue: number, currentItem: Item) => (initValue + currentItem.quantity * currentItem.price), 0)
)

export const selectFetching = createSelector(
    [selectCart], (cart) => cart.isFetching
)