import { Item } from "../../model/Item";
import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item: Item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (id: number) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: id
})

export const subtracItem = (item: Item) => ({
    type: CartActionTypes.SUBTRACT_ITEM,
    payload: item
})


export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});

export const fetchCartStart = () => ({
    type: CartActionTypes.FETCH_CART_START
});

export const fetchCartSuccess = (items: Array<Item>) => ({
    type: CartActionTypes.FETCH_CART_SUCCESS,
    payload: items
});